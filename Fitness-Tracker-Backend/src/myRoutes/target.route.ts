import { getAllTarget } from '#myControllers/api_v1.js';
import { Request, Response } from 'express';
import express from 'express';
const targetRouter = express.Router();

targetRouter.get('/', (req: Request, res: Response) => {
    getAllTarget(req, res);
});

export default targetRouter;