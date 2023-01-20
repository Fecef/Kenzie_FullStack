import { proposalRepository } from "../../repositories";
import { IProposal } from "../../interface/proposals.interface";
import { AppError } from "../../errors";

export const deleteProposalService = async (
  proposal: IProposal
): Promise<void> => {
  if (proposal.status !== "Recusada") {
    throw new AppError("Cannot delete not rejected proposal", 403);
  }

  await proposalRepository.softDelete(proposal.id);

  return;
};
