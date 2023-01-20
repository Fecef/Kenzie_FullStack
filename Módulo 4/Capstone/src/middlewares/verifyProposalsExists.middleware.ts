import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Proposals } from "../entities/proposal.entity";
import { AppError } from "../errors";

export const verifyProposalsExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const proposalsRepo = AppDataSource.getRepository(Proposals);
  const findProposals = await proposalsRepo.findOne({
    where: { id: req.params.id },
    relations: { employer: true, hired: true },
  });

  if (!findProposals) {
    throw new AppError("Proposal not found", 404);
  }

  req.proposal = findProposals;

  return next();
};
