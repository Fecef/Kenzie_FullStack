import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { UserHired } from "../entities/userHired.entity";
import { AppError } from "../errors";

export const verifyIsHiredMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hiredRepo = AppDataSource.getRepository(UserHired);
  const loggedUser = await hiredRepo.findOneBy({ id: req.user.id });

  if (!loggedUser) {
    throw new AppError("Missing hired permission", 401);
  }
  req.user = loggedUser;
  return next();
};
