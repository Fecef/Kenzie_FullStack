import { proposalRepository } from "../../repositories";
import { IProposal } from "../../interface/proposals.interface";
import { proposalsResponseShapes } from "./../../serializers/proposals.schema";
import { IEmployer } from "./../../interface/users.interface";

export const getProposalsEmployerService = async (
  employer: IEmployer
): Promise<IProposal[]> => {
  const proposals = await proposalRepository.find({
    where: { employer: { id: employer.id } },
    relations: { employer: true, hired: true, rating: true },
  });

  const verifiedResponseProposal = proposalsResponseShapes.validate(proposals, {
    stripUnknown: true,
  });

  return verifiedResponseProposal;
};
