from fastapi import FastAPI
from app.api.routes import chat
from app.core.middleware import setup_cors

app = FastAPI(title="Chatbot API")

setup_cors(app)

app.include_router(chat.router, prefix="/chat", tags=["chat"])

@app.get("/")
def root():
    return {"message": "API is running"}