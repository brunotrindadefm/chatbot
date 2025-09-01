type MessageProps = {
    role: "user" | "bot";
    text: string;
};

export const MessageItem = ({ role, text }: MessageProps) => {
    return (
        <div className={`flex mb-2 ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`px-4 py-2 rounded-2xl max-w-xs break-words ${role === 'user'
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-900"
                    }`}
            >
                {text}
            </div>
        </div>
    )
}