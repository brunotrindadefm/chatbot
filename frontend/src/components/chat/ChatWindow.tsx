import { useState } from "react"
import { ChatInput } from "./ChatInput"
import { MessageList } from "./MessageList"
import type { MessageType } from "../../types/MessageType";


export const ChatWindow = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);

    const handleSendMessage = (message: string) => {
        setMessages((prev) => [...prev, { role: "user", text: message }]);

        setTimeout(() => {
            setMessages((prev) => [...prev, { role: "bot", text: 'Aopa, sou o bot' }]);
        }, 5000);
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen w-full h-full bg-gray-900 text-white">
            <MessageList messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    )
}
