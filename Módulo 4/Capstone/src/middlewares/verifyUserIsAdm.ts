import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Admin } from "../entities/admin.entity";
import { AppError } from "../errors";

export const verifyUserIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(Admin);
  const user = await userRepository.findOneBy({
    id: req.user.id,
  });

  if (!user) {
    throw new AppError("Missing admin permissions", 403);
  }

  return next();
};
