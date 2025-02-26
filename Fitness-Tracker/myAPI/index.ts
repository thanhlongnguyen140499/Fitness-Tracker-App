import axios from "axios";

export const API_URL = 'http://localhost:3000';

export interface BodyPartType {
    id: number;
    name: string;
    imageBase64?: string;
}

export const getAllBodyPart = async (): Promise<BodyPartType[]> => {
    const response = await axios.get(`${API_URL}/bodypart`);

    if (!response) {
        throw new Error('No data found');        
    }

    return response.data.bodyParts;
}