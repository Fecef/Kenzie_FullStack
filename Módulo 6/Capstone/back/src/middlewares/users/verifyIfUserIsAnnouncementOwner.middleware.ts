import { Request, Response, NextFunction } from "express";

import { AppError } from "../../errors";

export const verifyIfUserIsAnnouncementOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.authUser.id !== req.annoucement.userId) {
    throw new AppError(
      "You don't have permission to perform this action as the announcement belongs to another user.",
      403
    );
  }
  return next();
};
