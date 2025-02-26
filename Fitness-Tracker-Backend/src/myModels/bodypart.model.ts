/* 
    SCHEMA FOR BODY PART
    - name: string
    - id: number
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export interface BodyPartType {
    id: number;
    imageBase64?: string;
    name: string;
}

// #region Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const encodeImageToBase64 = (filePath: string) => {
    const image = fs.readFileSync(filePath, { encoding: 'base64' });
    return `data:image/png;base64,${image}`;
}

const getBase64Image = (name: string) => {
    const imagePath = path.join(__dirname, `../public/bodyParts/${name}`);
    const base64Image = encodeImageToBase64(imagePath);

    return base64Image;
}

export const DEFAULT_BODY_PART: BodyPartType[] = [
    { id: 1, imageBase64: getBase64Image('bodypart-back.jpeg'), name: "Back" },
    { id: 2, imageBase64: getBase64Image('bodypart-cardio.jpg'), name: "Cardio" },
    { id: 3, imageBase64: getBase64Image('bodypart-chest.jpg'), name: "Chest" },
    { id: 4, imageBase64: getBase64Image('bodypart-lowerarms.jpg'), name: "Lower arms" },
    { id: 5, imageBase64: getBase64Image('bodypart-lowerlegs.jpg'), name: "lower legs" },
    { id: 6, imageBase64: getBase64Image('bodypart-neck.jpg'), name: "neck" },
    { id: 7, imageBase64: getBase64Image('bodypart-shoulders.jpg'), name: "shoulders" },
    { id: 8, imageBase64: getBase64Image('bodypart-upperarms.jpg'), name: "upper arms" },
    { id: 9, imageBase64: getBase64Image('bodypart-chest.jpg'), name: "upper legs" },
    { id: 10, imageBase64: getBase64Image('bodypart-waist.jpg'), name: "waist" }
];
