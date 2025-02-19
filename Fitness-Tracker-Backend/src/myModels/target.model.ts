/*
    SCHEMA FOR TARGET
    - name: string
    - id: number
*/

export interface TargetType {
    id: number;
    name: string;
}

export const DEFAULT_TARGET_LIST: TargetType[] = [
    {
        id: 1,
        name: "abductors"
    },
    {
        id: 2,
        name: "abs"
    },
    {
        id: 3,
        name: "adductors"
    },
    {
        id: 4,
        name: "biceps"
    },
    {
        id: 5,
        name: "calves"
    },
    {
        id: 6,
        name: "cardiovascular system"
    },
    {
        id: 7,
        name: "delts"
    },
    {
        id: 8,
        name: "forearms"
    },
    {
        id: 9,
        name: "glutes"
    },
    {
        id: 10,
        name: "hamstrings"
    },
    {
        id: 11,
        name: "lats"
    },
    {
        id: 12,
        name: "levator scapulae"
    },
    {
        id: 13,
        name: "pectorals"
    },
    {
        id: 14,
        name: "quads"
    },
    {
        id: 15,
        name: "serratus anterior"
    },
    {
        id: 16,
        name: "spine"
    },
    {
        id: 17,
        name: "traps"
    },
    {
        id: 18,
        name: "triceps"
    },
    {
        id: 19,
        name: "upper back"
    }
];
