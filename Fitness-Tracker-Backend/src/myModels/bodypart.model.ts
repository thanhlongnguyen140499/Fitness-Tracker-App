/* 
    SCHEMA FOR BODY PART
    - name: string
    - id: number
*/

export interface BodyPartType {
    id: number;
    name: string;
}

export const DEFAULT_BODY_PART: BodyPartType[] = [
    { id: 1, name: "back" },
    { id: 2, name: "cardio" },
    { id: 3, name: "chest" },
    { id: 4, name: "lower arms" },
    { id: 5, name: "lower legs" },
    { id: 6, name: "neck" },
    { id: 7, name: "shoulders" },
    { id: 8, name: "upper arms" },
    { id: 9, name: "upper legs" },
    { id: 10, name: "waist" }
];
