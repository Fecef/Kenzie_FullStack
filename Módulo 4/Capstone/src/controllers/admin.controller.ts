import { Request, Response } from "express";
import { IAdminPostRequest } from "../interface/admin.interface";
import { deleteAdminService } from "../services/admin/deleteAdmin.service";
import { getAllAdminService } from "../services/admin/getAllAdmin.service";
import { postAdminService } from "../services/admin/postAdmin.service";
import { sessionAdminService } from "../services/admin/sessionAdmin.service";

export const postAdminController = async (req: Request, res: Response) => {
  const userData: IAdminPostRequest = req.body;
  const data = await postAdminService(userData);
  return res.status(201).json(data);
};

export const sessionAdminController = async (req: Request, res: Response) => {
  const userData: IAdminPostRequest = req.body;
  const token = await sessionAdminService(userData);
  return res.json({ token });
};

export const getAllAdminController = async (req: Request, res: Response) => {
  const data = await getAllAdminService();
  return res.json(data);
};

export const deleteAdminController = async (req: Request, res: Response) => {
  const adminId: string = req.params.id;
  await deleteAdminService(adminId);
  return res.status(204).json({});
};
