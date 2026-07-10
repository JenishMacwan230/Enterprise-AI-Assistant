# Database package — pure infrastructure layer.
#
# Responsibility:
#   - Async SQLAlchemy engine (session.py)
#   - DeclarativeBase for ORM models (base.py)
#
# Does NOT contain:
#   - FastAPI dependencies  →  see app/dependencies/database.py
#   - ORM model classes     →  see app/models/
#   - Business logic        →  see app/services/
#
# Isolation rule:
#   If the database technology changes (e.g. PostgreSQL → MongoDB),
#   only this package and alembic/ are affected. All other layers
#   remain untouched.
