from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from jose import jwt, JWTError
from ..database import get_db
from ..models.user import User
from ..schemas.auth import LoginRequest, TokenResponse, RefreshRequest, RefreshResponse
from ..utils.security import verify_password, create_access_token, create_refresh_token
from ..config import settings

router = APIRouter(prefix="/api/auth", tags=["Authentication"])

@router.post("/login/", response_model=TokenResponse)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    """
    Authenticates admin user and returns access & refresh JWT tokens.
    Matches exact contract expected by Next.js authApi.login().
    """
    user = db.query(User).filter(User.username == payload.username).first()
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="No active account found with the given credentials"
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Account is disabled"
        )

    access_token = create_access_token(subject=user.username)
    refresh_token = create_refresh_token(subject=user.username)

    return TokenResponse(access=access_token, refresh=refresh_token)

@router.post("/refresh/", response_model=RefreshResponse)
def refresh_token(payload: RefreshRequest, db: Session = Depends(get_db)):
    """
    Refreshes expired access token using valid refresh token.
    """
    try:
        token_payload = jwt.decode(payload.refresh, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        username: str = token_payload.get("sub")
        token_type: str = token_payload.get("type")

        if username is None or token_type != "refresh":
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid refresh token."
            )
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired refresh token."
        )

    user = db.query(User).filter(User.username == username).first()
    if not user or not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found or inactive."
        )

    new_access_token = create_access_token(subject=user.username)
    return RefreshResponse(access=new_access_token)
