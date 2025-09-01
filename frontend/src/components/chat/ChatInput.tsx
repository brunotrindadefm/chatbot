import { ArrowUpIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

interface IChatInputProps {
    onSendMessage: (message: string) => void;
}

export const ChatInput = ({ onSendMessage }: IChatInputProps) => {
    const [message, setMessage] = useState<string>("");

    const handleSendText = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim() === "") return;
        console.log(message);
        onSendMessage(message);
        setMessage("");
    }

    return (
        <form className="w-[65%] p-4 bg-gray-900 border-t border-gray-700 flex flex-col items-center justify-center gap-2" onSubmit={handleSendText}>
            <div className="flex items-center w-full rounded-2xl bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                <input
                    id="search"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="search"
                    type="text"
                    className="block w-full bg-gray-800 py-3 pr-3 pl-1 text-base text-white focus:outline-none sm:text-sm"
                />
                <button type="submit" className="p-2 py-3 cursor-pointer">
                    <ArrowUpIcon className="size-6" />
                </button>
            </div>
            <h5 className="text-[13px]">O BTBot pode cometer erros. Considere verificar informações importantes.</h5>
        </form>
    )
}