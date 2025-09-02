import type { MessageType } from "../../types/MessageType"
import { RenderMessage } from "./RenderMessage";

export const MessageItem = ({ role, text }: MessageType) => {

    return (
        <div className={`flex mb-4 ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`px-4 py-2 rounded-2xl max-w-3xl break-words ${role === 'user'
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-900 border border-gray-200"
                    }`}
            >
                <RenderMessage text={text} />
            </div>
        </div>
    );
};