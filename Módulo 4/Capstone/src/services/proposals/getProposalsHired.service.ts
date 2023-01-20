import { proposalRepository } from "../../repositories";
import { IProposal } from "../../interface/proposals.interface";
import { proposalsResponseShapes } from "./../../serializers/proposals.schema";
import { IHired } from "../../interface/users.interface";

export const getProposalsHiredService = async (
  hired: IHired
): Promise<IProposal[]> => {
  const proposals = await proposalRepository.find({
    where: { hired: { id: hired.id } },
    relations: { hired: true, employer: true, rating: true },
  });

  const verifiedResponseProposal = proposalsResponseShapes.validate(proposals, {
    stripUnknown: true,
  });

  return verifiedResponseProposal;
};
