import { proposalRepository } from "../../repositories";
import {
  IProposal,
  IProposalStatusRequest,
} from "./../../interface/proposals.interface";
import { proposalResponseShape } from "../../serializers/proposals.schema";
import { AppError } from "../../errors";

export const patchProposalHiredService = async (
  proposal: IProposal,
  statusBody: IProposalStatusRequest
): Promise<IProposal> => {
  if (
    proposal.status !== "Enviada" ||
    (statusBody.status !== "Recusada" && statusBody.status !== "Em andamento")
  ) {
    throw new AppError("Missing employer permission", 401);
  }

  const proposalPatch = {
    ...proposal,
    status: statusBody.status,
  };

  await proposalRepository.save(proposalPatch);

  const verifiedResponseProposal = await proposalResponseShape.validate(
    proposalPatch,
    {
      stripUnknown: true,
    }
  );
  return verifiedResponseProposal;
};
