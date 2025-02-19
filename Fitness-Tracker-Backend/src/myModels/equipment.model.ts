/*
    SCHEMA FOR EQUIPMENT
    - name: string
    - id: number
*/

export interface EquipmentType {
    id: number;
    name: string;
}

export const DEFAULT_EQUIPMENT: EquipmentType[] = [
    { id: 1, name: "assisted" },
    { id: 2, name: "band" },
    { id: 3, name: "barbell" },
    { id: 4, name: "body weight" },
    { id: 5, name: "bosu ball" },
    { id: 6, name: "cable" },
    { id: 7, name: "dumbbell" },
    { id: 8, name: "elliptical machine" },
    { id: 9, name: "ez barbell" },
    { id: 10, name: "hammer" },
    { id: 11, name: "kettlebell" },
    { id: 12, name: "leverage machine" },
    { id: 13, name: "medicine ball" },
    { id: 14, name: "olympic barbell" },
    { id: 15, name: "resistance band" },
    { id: 16, name: "roller" },
    { id: 17, name: "rope" },
    { id: 18, name: "skierg machine" },
    { id: 19, name: "sled machine" },
    { id: 20, name: "smith machine" },
    { id: 21, name: "stability ball" },
    { id: 22, name: "stationary bike" },
    { id: 23, name: "stepmill machine" },
    { id: 24, name: "tire" },
    { id: 25, name: "trap bar" },
    { id: 26, name: "upper body ergometer" },
    { id: 27, name: "weighted" },
    { id: 28, name: "wheel roller" }
];
