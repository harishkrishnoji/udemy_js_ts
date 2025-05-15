from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
# from .inventory import InventoryItem  # Only if you need to reference inventory items

class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None

class UserCreate(UserBase):
    password: str

class UserAuth(BaseModel):
    full_name: str
    password: str

class UserUpdate(BaseModel):
    password: Optional[str] = None
    full_name: Optional[str] = None
    is_active: Optional[bool] = None

class UserInDBBase(UserBase):
    id: int
    is_active: bool
    is_superuser: bool

    class Config:
        from_attributes = True

# This will be the model returned to the client
class User(UserInDBBase):
    pass

# This will be the model stored in DB (could have additional fields)
class UserInDB(UserInDBBase):
    hashed_password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None