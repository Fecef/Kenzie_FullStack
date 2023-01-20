import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { UserEmployer } from "../entities/userEmployer.entity";
import { UserHired } from "../entities/userHired.entity";
import { AppError } from "../errors";

export const verifyUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hiredRepo = AppDataSource.getRepository(UserHired);
  const employerRepo = AppDataSource.getRepository(UserEmployer);

  const existsEmailHired = await hiredRepo.findOneBy({ email: req.body.email });
  if (existsEmailHired) {
    return next();
  }

  const existsEmailEmployer = await employerRepo.findOneBy({
    email: req.params.id,
  });

  if (existsEmailEmployer) {
    return next();
  }

  throw new AppError("User does not exists", 409);
};
