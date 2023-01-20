import { Request, Response } from "express";
import { IService } from "../interface/services.interface";
import { deleteServiceService } from "../services/services/deleteService.service";
import { getAllServicesService } from "../services/services/getAllServices.service";
import { postServiceService } from "../services/services/postServices.service";

export const postServiceController = async (req: Request, res: Response) => {
  const userData: IService = req.body;
  const data = await postServiceService(userData);
  return res.status(201).json(data);
};

export const getAllServicesController = async (req: Request, res: Response) => {
  const data = await getAllServicesService();
  return res.json(data);
};

export const deleteServiceController = async (req: Request, res: Response) => {
  const serviceId: string = req.params.id;
  await deleteServiceService(serviceId);
  return res.status(204).json({});
};
