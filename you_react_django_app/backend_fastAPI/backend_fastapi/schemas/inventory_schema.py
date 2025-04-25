from pydantic import BaseModel
from typing import Optional
from .user_schema import UserInDB

class InventoryItemBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    quantity: int

class InventoryItemCreate(InventoryItemBase):
    pass

class InventoryItemUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    quantity: Optional[int] = None

class InventoryItem(InventoryItemBase):
    id: int
    owner_id: int
    owner: UserInDB

    class Config:
        from_attributes = True