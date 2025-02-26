import { getAllExercise, getExerciesByBodyPart, getExerciesByEquipment } from '#myControllers/api_v1.js';
import { Request, Response } from 'express';
import express from 'express';
const exerciseRouter = express.Router();

exerciseRouter.get('/', (req: Request, res: Response) => {
    getAllExercise(req, res);
});

exerciseRouter.get('/bodyPart/:id', (req: Request, res: Response) => {
    getExerciesByBodyPart(req, res);
});

exerciseRouter.get('/equipment/:id', (req: Request, res: Response) => {
    getExerciesByEquipment(req, res);
});

exerciseRouter.get('/target/:id', (req: Request, res: Response) => {
    getExerciesByEquipment(req, res);
});

export default exerciseRouter;