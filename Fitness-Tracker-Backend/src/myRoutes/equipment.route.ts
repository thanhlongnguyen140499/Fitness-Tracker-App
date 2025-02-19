import { getAllEquipment } from '#myControllers/api_v1.js';
import { Request, Response } from 'express';
import express from 'express';
const equipmentRouter = express.Router();

equipmentRouter.get('/', (req: Request, res: Response) => {
    getAllEquipment(req, res);
});

export default equipmentRouter;