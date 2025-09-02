from groq import Groq
from app.core.config import settings

client = Groq(api_key=settings.API_KEY)

conversation_history = [ {"role": "system", "content": "Você é um chatbot programado por Bruno Trindade."},]

def generate_bot_response(user_message: str) -> dict:
    conversation_history.append({"role": "user", "content": user_message})
    
    response = client.chat.completions.create(
        model="llama-3.1-8b-instant", 
        messages=conversation_history
    )
    
    bot_message = response.choices[0].message.content
    
    conversation_history.append({"role": "assistant", "content": bot_message})
    
    return bot_message