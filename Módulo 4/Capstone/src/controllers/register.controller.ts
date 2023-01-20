import { Request, Response } from "express";
import { IRegisterRequest } from "../interface/register.interface";
import { registerUserService } from "../services/register/register.service";

export const registerUserController = async (req: Request, res: Response) => {
  const userData: IRegisterRequest = req.body;
  const data = await registerUserService(userData);

  return res.status(201).json(data);
};
