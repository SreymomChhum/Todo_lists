from sqlalchemy import Column, Integer, String
from db import Base

from .base_model import BaseModel


class ServiceModel(BaseModel, Base):
    __tablename__ = "services"
    id = Column(Integer, primary_key=True)
    title = Column(String(64), nullable=False, unique=True)
    image = Column(String(128), nullable=False, index=True)
    description = Column(String(128), nullable=False, index=True)

    
    def __init__(self, schema={}):
        super().__init__()
        for k, v in schema.items():
            if hasattr(self, k):
                setattr(self, k, v)
