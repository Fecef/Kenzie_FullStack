import { Request, Response } from "express";
import { createScheduleService, listSchedulesByPropertyService } from "../services";

export const createScheduleController = async (req: Request, res: Response) => {
    const data = await createScheduleService(req.body);

    return res.status(201).json(data);
};

export const listSchedulesByPropertyController = async (req: Request, res: Response) => {
    const data = await listSchedulesByPropertyService(req.params.id);

    return res.status(200).json(data);
}