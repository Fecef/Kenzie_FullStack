import { proposalRepository, ratingRepository } from "../../repositories";
import { IProposal } from "./../../interface/proposals.interface";
import { proposalResponseShape } from "../../serializers/proposals.schema";
import { IRating } from "./../../interface/users.interface";
import { AppError } from "../../errors";

export const patchProposalEmployerService = async (
  proposal: IProposal,
  rating?: IRating
): Promise<IProposal> => {
  if (proposal.status !== "Em andamento") {
    throw new AppError("Missing hired permission", 401);
  }

  const ratingObj = rating.recommendation
    ? { note: rating.note, recommendation: rating.recommendation }
    : { note: rating.note, recommendation: "" };

  const ratingCreated = ratingRepository.create(ratingObj);
  await ratingRepository.save(ratingCreated);

  const proposalPatch = {
    ...proposal,
    employer: proposal.employer,
    hired: proposal.hired,
    status: "Concluída",
    rating: ratingCreated,
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
