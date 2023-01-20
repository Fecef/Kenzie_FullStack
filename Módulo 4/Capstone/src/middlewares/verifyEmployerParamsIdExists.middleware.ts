import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { UserEmployer } from "../entities/userEmployer.entity";
import { AppError } from "../errors";

export const verifyEmployerParamsIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const paramsId = req.params.id;
  const employerRepo = AppDataSource.getRepository(UserEmployer);

  const employerUser = await employerRepo.findOneBy({ id: paramsId });

  if (!employerUser) {
    throw new AppError("Employer not found", 404);
  }
  return next();
};
