import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    PROJECT_NAME: str = "Chatbot"
    ENV: str = os.getenv("ENV", "development")
    API_KEY: str = os.getenv("API_KEY", "fake-key")

settings = Settings()
