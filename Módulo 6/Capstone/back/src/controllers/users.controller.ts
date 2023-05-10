import { Request, Response } from "express";

import * as Service from "../services";

export const createUserController = async (req: Request, res: Response) => {
  const data = await Service.createUserService(req.body);
  return res.status(201).json(data);
};

export const getOneUserController = async (req: Request, res: Response) => {
  const data = await Service.getOneUserService(req.params.id);
  return res.json(data);
};

export const userProfileController = async (req: Request, res: Response) => {
  const data = await Service.getOneUserService(req.authUser.id);
  return res.json(data);
};

export const updateUserController = async (req: Request, res: Response) => {
  const data = await Service.updateUserService(req);
  return res.json(data);
};

export const updateUserAddressController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.updateUserAddressService(req);
  return res.json(data);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await Service.deleteUserService(req.authUser.id);
  return res.status(204).json({});
};

export const sendResetEmailPasswordController = async (
  req: Request,
  res: Response
) => {
  const { email } = req.body;
  const { protocol } = req;
  const host = req.get("host");
  await Service.sendResetEmailPasswordService(email, protocol, host);
  return res.json({ message: "Email successfully sent!" });
};

export const resetPasswordController = async (req: Request, res: Response) => {
  const { password } = req.body;
  const { token } = req.params;

  await Service.resetPasswordService(password, token);

  return res.json({ message: "Password changed successfully!" });
};
