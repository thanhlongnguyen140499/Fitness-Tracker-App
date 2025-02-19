import { getAllBodyPart } from '#myControllers/api_v1.js';
import { Request, Response } from 'express';
import express from 'express';
const bodyPartRouter = express.Router();

bodyPartRouter.get('/', (req: Request, res: Response) => {
    getAllBodyPart(req, res);
});

export default bodyPartRouter;