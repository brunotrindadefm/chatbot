import { useEffect, useRef } from "react";
import type { IMessageListProps } from "../../interfaces/IMessageListProps";
import { MessageItem } from "./MessageItem";



export const MessageList = ({ messages }: IMessageListProps) => {
    useEffect(() => {
    }, [messages])
    return (
        <div className={`${messages.length > 0 ? 'flex-1 sm:w-[65%] w-full' : ''} transition-all duration-300 ease-in-out overflow-y-auto p-4 mt-12`}>
            {messages.length === 0 ? (
                <h2 className="text-2xl font-medium text-white text-center">
                    E aí, como posso te ajudar hoje?
                </h2>
            ) : (
                messages.map((msg, idx) => (
                    <MessageItem key={idx} role={msg.role} text={msg.text} />
                ))
            )}
        </div>
    )
}