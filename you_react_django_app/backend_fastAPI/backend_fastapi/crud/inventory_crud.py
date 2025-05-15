from sqlalchemy.orm import Session
from backend_fastapi.models.inventory_model import InventoryItem
from backend_fastapi.schemas import inventory_schema

def get_items(db: Session, skip: int = 0, limit: int = 100, owner_id: int = None):
    query = db.query(InventoryItem)
    if owner_id:
        query = query.filter(InventoryItem.owner_id == owner_id)
    return query.offset(skip).limit(limit).all()

def get_item(db: Session, item_id: int):
    return db.query(InventoryItem).filter(InventoryItem.id == item_id).first()

def create_user_item(db: Session, item: inventory_schema.InventoryItemCreate, owner_id: int):
    db_item = InventoryItem(**item.dict(), owner_id=owner_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def update_item(db: Session, item_id: int, item: inventory_schema.InventoryItemUpdate):
    db_item = get_item(db, item_id)
    if not db_item:
        return None
    update_data = item.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_item, key, value)
    db.commit()
    db.refresh(db_item)
    return db_item

def delete_item(db: Session, item_id: int):
    db_item = get_item(db, item_id)
    if not db_item:
        return None
    db.delete(db_item)
    db.commit()
    return db_item