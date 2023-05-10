import { Request, Response } from "express";
import * as Service from "../services";
import { IUserLogin } from "../../../front/src/interfaces/user.interface";
import { IUserSession } from "../interfaces/users";

export const loginCrontroller = async (req: Request, res: Response) => {
  const userLogin: IUserLogin = req.body;
  const token = await Service.loginService(userLogin);
  return res.json({ token });
};
