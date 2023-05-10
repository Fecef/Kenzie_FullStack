import { Request, Response } from "express";
import * as Service from "../services";

export const createCommentController = async (req: Request, res: Response) => {
  const userId: string = req.authUser.id;
  const announcementId: string = req.params.announcementId;
  const { comment } = req.body;
  const data = await Service.createCommentService(
    comment,
    userId,
    announcementId
  );
  return res.status(201).json(data);
};

export const deleteCommentController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  await Service.deleteCommentService(id);
  return res.status(204).json({});
};

export const updateCommentController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const { comment } = req.body;
  const data = await Service.updateCommentService(id, comment);
  return res.json(data);
};
