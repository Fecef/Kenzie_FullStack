import { Request, Response } from "express";
import { loginService } from "../services/session/session.service";
import { ILoginRequest } from './../interface/session.interface';

export const loginController = async (req: Request, res: Response) => {
  const loginData: ILoginRequest = req.body;
  const token = await loginService(loginData);

  return res.status(200).json({ token });
};
