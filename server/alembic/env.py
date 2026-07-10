"""
Alembic migration environment — async edition.

Why async?
  - Our SQLAlchemy engine uses asyncpg (async driver).
  - Alembic requires special handling via `run_async_migrations()` because
    the standard sync migration runner would hang or fail with an async engine.

How it works:
  1. `run_migrations_online()` is the entry point Alembic calls.
  2. It creates a real asyncpg connection, then calls `run_async_migrations()`.
  3. Inside `run_async_migrations()`, we create a sync-compatible connection
     from the async engine using `engine.connect()` as a context manager.
  4. We then call `context.run_migrations()` — Alembic applies DDL statements.

`target_metadata = Base.metadata` tells Alembic what the expected schema looks like.
When you add a new model class to app/models/, Alembic will detect it automatically
the next time you run `alembic revision --autogenerate`.
"""
import asyncio
from logging.config import fileConfig

from alembic import context
from sqlalchemy.ext.asyncio import create_async_engine

from app.core.config import settings
from app.database.base import Base

# Import all models here so Alembic can detect them during autogenerate.
# Even though the models are empty now, this import block must stay.
# Phase 2 will add: from app.models import user  # noqa: F401
import app.models  # noqa: F401

# Alembic Config object — provides access to alembic.ini values.
config = context.config

# Set up Python logging from alembic.ini [loggers] section.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# The metadata object Alembic will diff against the live database.
target_metadata = Base.metadata


def do_run_migrations(connection):
    """Run migrations synchronously using an existing connection."""
    context.configure(
        connection=connection,
        target_metadata=target_metadata,
        compare_type=True,   # Detect column type changes
        compare_server_default=True,  # Detect server default changes
    )
    with context.begin_transaction():
        context.run_migrations()


async def run_async_migrations():
    """Create async engine from settings and run migrations."""
    if not settings.DATABASE_URL:
        raise RuntimeError(
            "DATABASE_URL is not set. Cannot run migrations. "
            "Set DATABASE_URL in your .env file."
        )

    connectable = create_async_engine(settings.DATABASE_URL, pool_pre_ping=True)

    async with connectable.connect() as connection:
        await connection.run_sync(do_run_migrations)

    await connectable.dispose()


def run_migrations_online():
    """Entry point called by Alembic when running in 'online' mode."""
    asyncio.run(run_async_migrations())


run_migrations_online()
