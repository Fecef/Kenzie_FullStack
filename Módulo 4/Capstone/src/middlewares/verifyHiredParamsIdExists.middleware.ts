import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { UserHired } from "../entities/userHired.entity";
import { AppError } from "../errors";

export const verifyHiredParamsIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const paramsId = req.params.id;
  const hiredRepo = AppDataSource.getRepository(UserHired);

  const hiredUser = await hiredRepo.findOneBy({ id: paramsId });

  if (!hiredUser) {
    throw new AppError("Hired not found", 404);
  }
  return next();
};
