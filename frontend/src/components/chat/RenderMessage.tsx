import { useEffect, useState } from "react";
import Prism, { loadLanguage } from "../../utils/prism.setup";

interface IRenderMessageProps {
    text: string;
}

export const RenderMessage = ({ text }: IRenderMessageProps) => {

    const [copySuccess, setCopySuccess] = useState<boolean>(false);
    const parts = text.split(/(```[\s\S]*?```)/g);

    const handleCopyCode = (code: string, setCopySuccess: (value: boolean) => void) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopySuccess(true);
        }).catch(err => {
            console.error('Failed to copy code: ', err);
        });
    }

    useEffect(() => {
        Prism.highlightAll();
    }, [parts]);

    useEffect(() => {
        setTimeout(() => {
            setCopySuccess(false);
        }, 5000)
    }, [copySuccess])

    return (
        <>
            {
                parts.map((part, index) => {
                    const codeMatch = part.match(/```(\w+)?\s*([\s\S]*?)```/);

                    if (codeMatch) {
                        const language = codeMatch[1] || 'python';
                        const code = codeMatch[2].trim();

                        loadLanguage(language);

                        return (
                            <div key={index} className="my-2">
                                {language && (
                                    <div className="flex justify-between items-center mb-1 bg-gray-900 px-2 py-2 rounded">
                                        <div className="text-gray-600 text-xs text-white font-mono">
                                            {language.toUpperCase()}
                                        </div>
                                        <button
                                            className="cursor-pointer bg-cyan-700 px-2 py-1 text-xs text-white rounded-md hover:bg-cyan-800"
                                            onClick={() => handleCopyCode(code, setCopySuccess)}
                                        >
                                            {copySuccess ? 'Copiado!' : 'Copiar'}
                                        </button>
                                    </div>
                                )}
                                <pre className={`language-${language} bg-gray-900 p-3 rounded-md 
                 overflow-x-auto max-w-full 
                 max-h-[50vh] overflow-y-auto`}>
                                    <code className={`language-${language} text-sm whitespace-pre`}>
                                        {code}
                                    </code>
                                </pre>
                            </div>
                        );
                    }

                    return (
                        <span
                            key={index}
                            className="whitespace-pre-wrap leading-relaxed"
                        >
                            {part}
                        </span>
                    );
                })
            }
        </>
    )

}