import { Request, Response } from "express";
import { updateUserEmployerService } from "../services/users/employer/updateUserEmployerService.service";
import { updateAddressUserService } from './../services/users/employer/updateAddressUserService.service';
import { deleteUserEmployerService } from './../services/users/employer/deleteUserEmployerService.service';
import { getUserEmployerService } from "../services/users/employer/getUserEmployerService.service";

export const getEmployerUserController = async (
  req: Request,
  res: Response
) => {
  const data = await getUserEmployerService(req.user.id);
  return res.status(200).json(data);
};

export const updateEmployerUserController = async (
  req: Request,
  res: Response
) => {
  const data = await updateUserEmployerService(req);
  return res.status(200).json(data);
};

export const updateAddressUserController = async (
  req: Request,
  res: Response
) => {
  const data = await updateAddressUserService(req);
  return res.status(200).json(data);
};

export const deleteEmployerUserController = async (
  req: Request,
  res: Response
) => {
  await deleteUserEmployerService(req.user.id);
  return res.status(204).json({});
};
