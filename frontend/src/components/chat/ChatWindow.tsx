import { useState } from "react"
import { ChatInput } from "./ChatInput"
import { MessageList } from "./MessageList"
import type { MessageType } from "../../types/MessageType";
import { sendMessageToBot } from "../../services/chatService";

export const ChatWindow = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);


    const handleSendMessage = async (message: string) => {
        setMessages((prev) => [...prev, { role: "user", text: message }]);
        
        const botResponse = await sendMessageToBot(message);
        setMessages((prev) => [...prev, { role: "bot", text: botResponse.message }]);
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen w-full h-full bg-gray-900 text-white">
            <MessageList messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    )
}
