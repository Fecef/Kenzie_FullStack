import { Request, Response, NextFunction } from "express";

import { prisma } from "../../database";
import { AppError } from "../../errors";

export const verifyIfUserIsSeller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await prisma.user.findFirst({
    where: {
      id: req.authUser.id,
    },
  });
  if (user.accountType !== "seller") {
    throw new AppError("Only sellers are allowed to perform this action.", 403);
  }
  return next();
};
