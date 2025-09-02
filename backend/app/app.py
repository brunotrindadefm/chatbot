from fastapi import FastAPI
from app.api.routes import chat

app = FastAPI(title="Chatbot API")

app.include_router(chat.router, prefix="/chat", tags=["chat"])

@app.get("/")
def root():
    return {"message": "API is running"}