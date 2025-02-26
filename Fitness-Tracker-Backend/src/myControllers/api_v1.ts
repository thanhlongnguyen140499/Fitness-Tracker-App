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

export const getExerciesByBodyPart = (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const foundedBodyPart = DEFAULT_BODY_PART.find((bodyPart) => bodyPart.id.toString() === id);
        if (!foundedBodyPart) {
            return res.status(404).json({ error: `Body part with id ${id} not found` });
        }

        const exercises: ExerciseType[] =
            DEFAULT_EXERCISE_LIST.filter((exercise) => exercise.bodyPart.toLowerCase() === foundedBodyPart.name.toLowerCase());
        return res.status(200).json({ exercises });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message });
    }
}

export const getExerciesByEquipment = (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const foundedEquipment = DEFAULT_EQUIPMENT.find((equipment) => equipment.id.toString() === id);
        if (!foundedEquipment) {
            return res.status(404).json({ error: `Equipment with id ${id} not found` });
        }

        const exercises: ExerciseType[] = DEFAULT_EXERCISE_LIST.filter((exercise) => exercise.equipment.toLowerCase() === foundedEquipment.name.toLowerCase());
        return res.status(200).json({ exercises });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message });
    }
}

export const getExerciesByTarget = (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const foundedTarget = DEFAULT_TARGET_LIST.find((target) => target.id.toString() === id);
        if (!foundedTarget) {
            return res.status(404).json({ error: `Target with id ${id} not found` });
        }

        const exercises: ExerciseType[] = DEFAULT_EXERCISE_LIST.filter((exercise) => exercise.target.toLowerCase() === foundedTarget.name.toLowerCase());
        return res.status(200).json({ exercises });
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message });
    }
}