from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from app.core.config import settings

# ---------------------------------------------------------------------------
# Async Engine
# ---------------------------------------------------------------------------
# Engine creation is guarded against a missing DATABASE_URL.
#
# Why: `create_async_engine` is called at module import time. If DATABASE_URL
# is None (not set in .env), passing None to SQLAlchemy raises ArgumentError
# immediately — crashing the entire server, including non-database endpoints
# like GET /health.
#
# Resolution: Engine and session factory are initialized only when
# DATABASE_URL is present. When they are None, `get_db_session` in
# app/dependencies/database.py returns HTTP 503 instead of crashing.
#
# `pool_pre_ping=True` — discards stale connections before use. Essential
# in production where the database can restart between requests.
# `echo` — logs raw SQL in development only; silent in staging/production.
# ---------------------------------------------------------------------------
engine = None
AsyncSessionLocal = None

if settings.DATABASE_URL:
    engine = create_async_engine(
        settings.DATABASE_URL,
        pool_pre_ping=True,
        echo=settings.ENVIRONMENT == "development",
    )

    # -----------------------------------------------------------------------
    # Async Session Factory
    # -----------------------------------------------------------------------
    # `expire_on_commit=False` — prevents SQLAlchemy from expiring ORM
    # attributes after commit. Without this, accessing any attribute after
    # `await session.commit()` triggers a lazy load — which fails in async
    # mode because there is no active event loop to drive the coroutine.
    # -----------------------------------------------------------------------
    AsyncSessionLocal = async_sessionmaker(
        bind=engine,
        class_=AsyncSession,
        expire_on_commit=False,
    )
