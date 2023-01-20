import { proposalRepository } from "../../repositories";
import { IProposal } from "../../interface/proposals.interface";
import { proposalsResponseShapes } from "./../../serializers/proposals.schema";

export const getProposalsByIdHiredService = async (
  hiredId: string
): Promise<IProposal[]> => {
  const proposals = await proposalRepository.find({
    where: { hired: { id: hiredId } },
    relations: { hired: true, employer: true, rating: true },
  });

  const verifiedResponseProposal = proposalsResponseShapes.validate(proposals, {
    stripUnknown: true,
  });

  return verifiedResponseProposal;
};
