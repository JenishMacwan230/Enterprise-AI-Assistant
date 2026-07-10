from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """
    Shared declarative base for all SQLAlchemy ORM models.

    Every model class in app/models/ must inherit from this Base.
    This allows Alembic to discover all tables automatically via
    `target_metadata = Base.metadata` in alembic/env.py.

    Technology note: If the database changes from PostgreSQL to another
    SQL engine, only session.py and alembic/env.py need updating.
    This base class remains unchanged.
    """
    pass
