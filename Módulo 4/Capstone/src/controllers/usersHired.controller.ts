import { Request, Response } from "express";
import { deleteUserHiredService } from "../services/users/hired/deleteUserHiredService.service";
import { getAllHiredUsersService } from "../services/users/hired/getAllHiredUsersService.service";
import { getHiredUserService } from "../services/users/hired/getHiredUserService.service";
import { retrieveHiredUserService } from "../services/users/hired/retrieveHiredUserService.service";
import { updateAddressUserHiredService } from "../services/users/hired/updateAddressUserHiredService.service";
import { updateServicesUserHiredService } from "../services/users/hired/updateServicesUserHiredService.service";
import { updateUserHiredService } from "../services/users/hired/updateUserHiredService.service";

export const getAllHiredUsersController = async (
  req: Request,
  res: Response
) => {
  const data = await getAllHiredUsersService();
  return res.status(200).json(data);
};

export const getHiredUserController = async (
  req: Request,
  res: Response
) => {
  const data = await getHiredUserService(req);
  return res.status(200).json(data);
};

export const retrieveHiredUserController = async (req: Request, res: Response) => {
  const data = await retrieveHiredUserService(req.params.id);
  return res.status(200).json(data);
};

export const updateUserHiredController = async (
  req: Request,
  res: Response
) => {
  const data = await updateUserHiredService(req);
  return res.status(200).json(data);
};

export const updateAddressUserHiredController = async (
  req: Request,
  res: Response
) => {
  const data = await updateAddressUserHiredService(req);
  return res.status(200).json(data);
};

export const updateServiceUserHiredController = async (
  req: Request,
  res: Response
) => {
  const data = await updateServicesUserHiredService(req);
  return res.status(200).json(data);
};

export const deleteUserHiredController = async (
  req: Request,
  res: Response
) => {
  await deleteUserHiredService(req.user.id);
  return res.status(204).json({});
};
