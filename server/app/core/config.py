from typing import List, Optional, Union
from pydantic import BeforeValidator
from pydantic_settings import BaseSettings, SettingsConfigDict
from typing_extensions import Annotated

def parse_cors_origins(v: Union[str, List[str]]) -> List[str]:
    if isinstance(v, str) and not v.startswith("["):
        return [i.strip() for i in v.split(",")]
    elif isinstance(v, list):
        return v
    import json
    try:
        return json.loads(v)
    except Exception:
        return [v]

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )
    
    PROJECT_NAME: str = "Enterprise RAG AI Agent"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    
    # CORS Configuration
    BACKEND_CORS_ORIGINS: Annotated[
        List[str], BeforeValidator(parse_cors_origins)
    ] = ["http://localhost:3000"]
    
    # Logging
    LOG_LEVEL: str = "INFO"

    # Database
    # Format: postgresql+asyncpg://user:password@host:port/dbname
    # asyncpg is the async PostgreSQL driver required by SQLAlchemy 2.0 async.
    # Optional[str] so the app starts cleanly for health checks before DB is ready.
    DATABASE_URL: Optional[str] = None

settings = Settings()
