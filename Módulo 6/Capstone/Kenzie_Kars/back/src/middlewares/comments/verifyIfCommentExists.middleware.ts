import { Request, Response, NextFunction } from "express";

import { prisma } from "../../database";
import { AppError } from "../../errors";

export const verifyIfCommentExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const comment = await prisma.comment.findFirst({
    where: {
      id: req.params.id,
    },
  });
  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  return next();
};
