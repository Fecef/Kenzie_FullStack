import { proposalRepository } from "../../repositories";
import { IProposal } from "./../../interface/proposals.interface";
import { proposalResponseShape } from "../../serializers/proposals.schema";

export const getProposalService = async (
  proposal: IProposal
): Promise<IProposal> => {
  const proposalSaved = await proposalRepository.findOne({
    where: { id: proposal.id },
    relations: { employer: true, hired: true, rating: true },
  });

  const verifiedResponseProposal = await proposalResponseShape.validate(
    proposalSaved,
    {
      stripUnknown: true,
    }
  );

  return verifiedResponseProposal;
};
