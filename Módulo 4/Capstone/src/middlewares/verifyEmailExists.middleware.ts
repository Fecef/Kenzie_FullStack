import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { UserEmployer } from "../entities/userEmployer.entity";
import { UserHired } from "../entities/userHired.entity";
import { AppError } from "../errors";

export const verifyEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hiredRepo = AppDataSource.getRepository(UserHired);
  const employerRepo = AppDataSource.getRepository(UserEmployer);

  const existsEmailHired = await hiredRepo.findOneBy({ email: req.body.email });
  if (existsEmailHired) {
    throw new AppError("Email already exists", 409);
  }

  const existsEmailEmployer = await employerRepo.findOneBy({
    email: req.body.email,
  });

  if (existsEmailEmployer) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
