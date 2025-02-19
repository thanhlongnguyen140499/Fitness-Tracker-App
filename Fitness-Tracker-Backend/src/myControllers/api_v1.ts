import { BodyPartType, DEFAULT_BODY_PART } from "#myModels/bodypart.model.js";
import { DEFAULT_EQUIPMENT, EquipmentType } from "#myModels/equipment.model.js";
import DEFAULT_EXERCISE_LIST, { ExerciseType } from "#myModels/exercise.model.js";
import { DEFAULT_TARGET_LIST, TargetType } from "#myModels/target.model.js";
import { Request, Response } from 'express';

// #region 1. TARGET
export const getAllTarget = (req: Request, res: Response) => {
    try {
        const targets: TargetType[] = DEFAULT_TARGET_LIST;
        return res.status(200).json({ targets });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message });
    }
}

// #region 2. BODY PART
export const getAllBodyPart = (req: Request, res: Response) => {
    try {
        const bodyParts: BodyPartType[] = DEFAULT_BODY_PART;
        return res.status(200).json({ bodyParts });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message });
    }
}

// #region 3. EQUIPMENT
export const getAllEquipment = (req: Request, res: Response) => {
    try {
        const equipments: EquipmentType[] = DEFAULT_EQUIPMENT;
        return res.status(200).json({ equipments });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message });
    }
}

// #region 2. EXERCISE

export const getAllExercise = (req: Request, res: Response) => {
    try {
        const exercises: ExerciseType[] = DEFAULT_EXERCISE_LIST;
        return res.status(200).json({ exercises });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message });
    }
}
