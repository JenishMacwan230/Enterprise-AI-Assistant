import logging

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession

from app.dependencies.database import get_db_session

logger = logging.getLogger(__name__)

router = APIRouter()


@router.get("/health", status_code=200)
def check_health():
    return {"status": "healthy"}


@router.get("/health/database", status_code=200)
async def check_database_health(db: AsyncSession = Depends(get_db_session)):
    """
    Verify that the database is reachable and accepting queries.

    Executes `SELECT 1` — the minimal SQL connectivity probe.
    It touches no application tables and adds no load beyond
    opening and exercising the connection.

    Returns:
        200 {"status": "connected"}   — database is up and responding.
        503 {"detail": "..."}         — database unreachable or misconfigured.
    """
    try:
        await db.execute(text("SELECT 1"))
        return {"status": "connected"}
    except SQLAlchemyError as exc:
        # Log the real error server-side for observability.
        # Never expose raw exception details to the client — they may
        # contain credentials, internal hostnames, or schema information.
        logger.error("Database health check failed: %s", exc)
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database connection failed. The service is temporarily unavailable.",
        )
