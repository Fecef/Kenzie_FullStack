import { proposalRepository } from "../../repositories";
import { IProposal } from "../../interface/proposals.interface";
import { proposalsResponseShapes } from "./../../serializers/proposals.schema";

export const getProposalsByIdEmployerService = async (
  employerId: string
): Promise<IProposal[]> => {
  const proposals = await proposalRepository.find({
    where: { employer: { id: employerId } },
    relations: { employer: true, hired: true, rating: true },
  });

  const verifiedResponseProposal = proposalsResponseShapes.validate(proposals, {
    stripUnknown: true,
  });

  return verifiedResponseProposal;
};
