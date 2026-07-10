# dependencies package — FastAPI injection layer.
#
# Responsibility:
#   All FastAPI Depends() callables live here.
#   This package is the bridge between the framework and the infrastructure.
#
# Current:
#   database.py  →  get_db_session (async DB session per request)
#
# Phase 2 (Authentication) will add:
#   auth.py  →  get_current_user, require_admin_role
