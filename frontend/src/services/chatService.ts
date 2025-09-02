import axios from "axios";
import type { IChatResponse } from "../interfaces/IChatResponse";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const sendMessageToBot = async (message: string): Promise<IChatResponse> => {
    try {
        const response = await axios.post(`${API_URL}/chat/`, { message });
        return response.data;
    } catch (error) {
        return { message: "Parece que chegou ao fim a quantidade de requisições." };
    }
}