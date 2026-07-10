"""
app/dependencies/database.py

FastAPI database session dependency.

Responsibility:
  Provide a scoped AsyncSession to route handlers and services via
  FastAPI's Depends() injection system.

Why here and NOT in app/database/:
  app/database/ is pure infrastructure — it owns the engine and the
  declarative base. It has no knowledge of FastAPI.

  app/dependencies/ is the FastAPI-specific wiring layer. get_db_session
  is a framework hook (it uses `yield`, which is a FastAPI lifecycle
  concept). If the framework changes, only this file changes.

Usage in a route:
    from fastapi import Depends
    from sqlalchemy.ext.asyncio import AsyncSession
    from app.dependencies.database import get_db_session

    @router.get("/example")
    async def example(db: AsyncSession = Depends(get_db_session)):
        ...
"""
from collections.abc import AsyncGenerator

from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import AsyncSessionLocal


async def get_db_session() -> AsyncGenerator[AsyncSession, None]:
    """
    Yield an AsyncSession scoped to a single HTTP request lifecycle.

    - Session opens when the route handler is invoked.
    - Session closes in the `finally` block whether the handler
      succeeded or raised an exception.
    - Never import AsyncSessionLocal directly in routes or services —
      always use Depends(get_db_session) so the session lifecycle
      is managed here, not scattered across the codebase.
    - Override this dependency in pytest using app.dependency_overrides
      to inject a test session without touching production code.

    Raises HTTP 503 if DATABASE_URL is not configured, so callers receive
    a meaningful error instead of an unhandled AttributeError crash.
    """
    if AsyncSessionLocal is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database is not configured. Set DATABASE_URL in your .env file.",
        )

    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()
