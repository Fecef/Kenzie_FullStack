import { Request, Response, NextFunction } from "express";
import { prisma } from "../../database";
import { AppError } from "../../errors";

export const verifyIfUserIsCommentOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const comment = await prisma.comment.findFirst({
    where: {
      id: req.params.id,
    },
  });
  if (req.authUser.id !== comment.userId) {
    throw new AppError(
      "You don't have permission to perform this action as the comment belongs to another user.",
      403
    );
  }
  return next();
};
