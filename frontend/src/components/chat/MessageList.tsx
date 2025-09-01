import { MessageItem } from "./MessageItem";

type typeMessage = {
    role: "user" | "bot";
    text: string;
}

interface IMessageListProps {
    messages: typeMessage[];
}

export const MessageList = ({ messages }: IMessageListProps) => {
    return (
        <div className={`${messages.length > 0 ? 'flex-1 w-[65%]' : ''} overflow-y-auto p-4 mt-12`}>
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