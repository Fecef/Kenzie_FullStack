import { Request, Response } from "express";
import { createPropertyService, listPropertiesService } from "../services";

export const createPropertyController = async (req: Request, res: Response) => {
    const data = await createPropertyService(req.body);

    return res.status(201).json(data);
}

export const listPropertiesController = async (req: Request, res: Response) => {
    const data = await listPropertiesService();

    return res.status(200).json(data);
}