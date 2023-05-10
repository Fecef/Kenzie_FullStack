import { Request, Response, NextFunction } from "express";

import { prisma } from "../../database";
import { AppError } from "../../errors";

export const verifyDuplicateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const existUser = await prisma.user.findFirst({
    where: {
      OR: [{ cpf: req.body.cpf }, { email: req.body.email }],
    },
  });
  if (existUser) {
    if (existUser.cpf === req.body.cpf) {
      throw new AppError("CPF Already Exists", 409);
    }
    if (existUser.email === req.body.email) {
      throw new AppError("Email Already Exists", 409);
    }
  }

  return next();
};
