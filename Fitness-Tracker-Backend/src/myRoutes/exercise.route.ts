import { getAllExercise } from '#myControllers/api_v1.js';
import { Request, Response } from 'express';
import express from 'express';
const exerciseRouter = express.Router();

exerciseRouter.get('/', (req: Request, res: Response) => {
    getAllExercise(req, res);
});

export default exerciseRouter;