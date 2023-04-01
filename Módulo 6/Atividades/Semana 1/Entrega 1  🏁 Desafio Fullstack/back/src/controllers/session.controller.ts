import { Request, Response } from "express";
import * as service from "../services";

export const createSessionController = async (req: Request, res: Response) => {
    const [token, userId] = await service.createSessionService(req.body);

    return res.status(200).json({ token, userId });
};