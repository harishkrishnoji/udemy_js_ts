from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List, Annotated
from datetime import timedelta

from backend_fastapi.schemas import inventory_schema, user_schema
from backend_fastapi.schemas.user_schema import Token, UserCreate, UserInDB
from backend_fastapi.crud import inventory_crud, user_crud
from backend_fastapi.database import SessionLocal, engine, Base
from backend_fastapi.auth.jwt import (
    authenticate_user,
    create_access_token,
    get_current_active_user,
    ACCESS_TOKEN_EXPIRE_MINUTES
)

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

Base.metadata.create_all(bind=engine)

@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: UserCreate, db: db_dependency):
    user = authenticate_user(db, form_data.email, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/users/", response_model=UserInDB)
def create_user(user: UserCreate, db: db_dependency):
    db_user = user_crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return user_crud.create_user(db=db, user=user)

@app.get("/users/me/", response_model=UserInDB)
async def read_users_me(current_user: UserInDB = Depends(get_current_active_user)):
    return current_user

@app.get("/users/me/items/", response_model=List[inventory_schema.InventoryItem])
async def read_own_items(
    current_user: user_schema.UserInDB = Depends(get_current_active_user),
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100
):
    items = inventory_crud.get_items(db, skip=skip, limit=limit, owner_id=current_user.id)
    return items

@app.post("/users/me/items/", response_model=inventory_schema.InventoryItem)
def create_item_for_user(
    item: inventory_schema.InventoryItemCreate,
    current_user: user_schema.UserInDB = Depends(get_current_active_user),
    db: Session = Depends(get_db),
):
    return inventory_crud.create_user_item(db=db, item=item, owner_id=current_user.id)

@app.put("/items/{item_id}", response_model=inventory_schema.InventoryItem)
def update_inventory_item(
    item_id: int,
    item: inventory_schema.InventoryItemUpdate,
    current_user: user_schema.UserInDB = Depends(get_current_active_user),
    db: Session = Depends(get_db),
):
    db_item = inventory_crud.get_item(db, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    if db_item.owner_id != current_user.id:
        raise HTTPException(status_code=400, detail="Not enough permissions")
    return inventory_crud.update_item(db=db, item_id=item_id, item=item)

@app.delete("/items/{item_id}", response_model=inventory_schema.InventoryItem)
def delete_inventory_item(
    item_id: int,
    current_user: user_schema.UserInDB = Depends(get_current_active_user),
    db: Session = Depends(get_db),
):
    db_item = inventory_crud.get_item(db, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    if db_item.owner_id != current_user.id:
        raise HTTPException(status_code=400, detail="Not enough permissions")
    return inventory_crud.delete_item(db=db, item_id=item_id)