import { Request, Response } from "express";
import { createUserService, deleteUserService, listUsersService, updateUserService } from "../services";

export const createUserController = async (req: Request, res: Response) => {
    const data = await createUserService(req.body);

    return res.status(201).json(data);
};

export const listUsersController = async (req: Request, res: Response) => {
    const data = await listUsersService();

    return res.status(200).json(data);
};

export const updateUserController = async (req: Request, res: Response) => {
    const data = await updateUserService(req.foundUser, req.body);

    return res.status(200).json(data);
};

export const deleteUserController = async (req: Request, res: Response) => {
    const data = await deleteUserService(req.foundUser);

    return res.status(204).json(data);
};