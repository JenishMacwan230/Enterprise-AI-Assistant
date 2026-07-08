import logging
import sys
from app.core.config import settings

def setup_logging() -> None:
    # Clear existing handlers to avoid duplicate logging config
    root_logger = logging.getLogger()
    for handler in root_logger.handlers[:]:
        root_logger.removeHandler(handler)
        
    log_level = getattr(logging, settings.LOG_LEVEL.upper(), logging.INFO)
    
    log_format = (
        "[%(asctime)s] %(levelname)s in %(name)s [%(filename)s:%(lineno)d]: %(message)s"
    )
    
    logging.basicConfig(
        level=log_level,
        format=log_format,
        handlers=[
            logging.StreamHandler(sys.stdout)
        ]
    )
    
    # Ensure uvicorn logs propagation is enabled but handles format
    logging.getLogger("uvicorn.error").propagate = True
    logging.getLogger("uvicorn.access").propagate = True
