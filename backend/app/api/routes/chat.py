from fastapi import FastAPI
from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import generate_bot_response

router = FastAPI().router

@router.post("/", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    try:
        response = generate_bot_response(request.message)
        if isinstance(response, str):
            response = {"message": response}
        return response
    except Exception as e:
        print("endpoint error:", e)
        raise e