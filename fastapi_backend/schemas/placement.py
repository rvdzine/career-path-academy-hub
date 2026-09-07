from pydantic import BaseModel, EmailStr
from typing import Optional, List, Union

class PlacementResponse(BaseModel):
    message: str = "Submitted successfully"
