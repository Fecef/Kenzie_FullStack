import { Request, Response } from "express"
import * as service from "../services"

export const createUserController = async (req: Request, res: Response) => {
    const data = await service.createUserService(req.body);

    return res.status(201).json(data)
}

export const listUserController = async (req: Request, res: Response) => {
    const data = await service.listUserService();

    return res.status(200).json(data);
}

export const retrieveUserController = async (req: Request, res: Response) => {
    const data = await service.retrieveUserService(req.user);

    return res.status(200).json(data)
}

export const updateUserController = async (req: Request, res: Response) => {
    const data = await service.updateUserService(req.user, req.body);

    return res.status(200).json(data)
}

export const deleteUserController = async (req: Request, res: Response) => {
    const data = await service.deleteUserService(req.user);

    return res.status(204).json(data)
}
