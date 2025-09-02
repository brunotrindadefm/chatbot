def generate_bot_response(user_message: str) -> dict:
    if "oi" in user_message.lower():
        return "Opa, bão?"
    return f"Você disse: {user_message}"