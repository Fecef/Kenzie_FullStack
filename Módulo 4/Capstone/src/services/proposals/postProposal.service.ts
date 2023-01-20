import { userHiredRepo } from "./../../repositories/index";
import { proposalRepository } from "../../repositories";
import {
  IProposal,
  IProposalPostRequest,
} from "./../../interface/proposals.interface";
import { proposalResponseShape } from "../../serializers/proposals.schema";
import { IEmployer } from "./../../interface/users.interface";

export const postProposalService = async (
  data: IProposalPostRequest,
  employer: IEmployer,
  hiredId: string
): Promise<IProposal> => {
  const hiredUser = await userHiredRepo.findOneBy({
    id: hiredId,
  });

  const proposalCreate = {
    hired: hiredUser,
    ...data,
    employer: employer,
    status: "Enviada",
  };

  const proposal = proposalRepository.create(proposalCreate);
  await proposalRepository.save(proposal);

  const verifiedResponseProposal = proposalResponseShape.validate(proposal, {
    stripUnknown: true,
  });

  return verifiedResponseProposal;
};
