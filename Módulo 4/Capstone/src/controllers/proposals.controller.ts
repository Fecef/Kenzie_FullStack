import { Request, Response } from "express";

import { getProposalsEmployerService } from "./../services/proposals/getProposalsEmployer.service";
import { postProposalService } from "../services/proposals/postProposal.service";
import { getProposalService } from "../services/proposals/getProposal.service";
import { getProposalsService } from "../services/proposals/getProposals.service";
import { deleteProposalService } from "../services/proposals/deleteProposal.service";
import { getProposalsHiredService } from "../services/proposals/getProposalsHired.service";
import { patchProposalEmployerService } from "../services/proposals/patchProposalEmployer.service";
import { patchProposalHiredService } from "../services/proposals/patchProposalHired.service";

import { IEmployer, IHired, IRating } from "./../interface/users.interface";
import {
  IProposal,
  IProposalStatusRequest,
} from "./../interface/proposals.interface";
import { getProposalsByIdEmployerService } from "../services/proposals/getProposalsByIdEmployer.service";
import { getProposalsByIdHiredService } from "../services/proposals/getProposalsByIdHired.service";

export const getProposalsController = async (req: Request, res: Response) => {
  const data: IProposal[] = await getProposalsService();

  return res.status(200).json(data);
};

export const getProposalsEmployerController = async (
  req: Request,
  res: Response
) => {
  const userLogged: IEmployer = req.user;

  const data: IProposal[] = await getProposalsEmployerService(userLogged);

  return res.status(200).json(data);
};

export const getProposalsByIdEmployerController = async (
  req: Request,
  res: Response
) => {
  const employerId: string = req.params.id;

  const data: IProposal[] = await getProposalsByIdEmployerService(employerId);

  return res.status(200).json(data);
};

export const getProposalsHiredController = async (
  req: Request,
  res: Response
) => {
  const userLogged: IHired = req.user;

  const data: IProposal[] = await getProposalsHiredService(userLogged);

  return res.status(200).json(data);
};
export const getProposalsByIdHiredController = async (
  req: Request,
  res: Response
) => {
  const hiredId: string = req.params.id;

  const data: IProposal[] = await getProposalsByIdHiredService(hiredId);

  return res.status(200).json(data);
};

export const getProposalController = async (req: Request, res: Response) => {
  const proposal: IProposal = req.proposal;

  const data: IProposal = await getProposalService(proposal);

  return res.status(200).json(data);
};

//
export const postProposalController = async (req: Request, res: Response) => {
  const proposal: IProposal = req.body;
  const userLogged: IEmployer = req.user;
  const hiredId: string = req.params.id;

  const data: IProposal = await postProposalService(
    proposal,
    userLogged,
    hiredId
  );

  return res.status(201).json(data);
};

export const patchProposalEmployerController = async (
  req: Request,
  res: Response
) => {
  const proposal: IProposal = req.proposal;
  const proposalRatingUpdate: IRating = req.body.rating;

  const data: IProposal = await patchProposalEmployerService(
    proposal,
    proposalRatingUpdate
  );

  return res.status(200).json(data);
};

export const patchProposalHiredController = async (
  req: Request,
  res: Response
) => {
  const proposal: IProposal = req.proposal;
  const status: IProposalStatusRequest = req.body;

  const data: IProposal = await patchProposalHiredService(proposal, status);

  return res.status(200).json(data);
};

export const deleteProposalController = async (req: Request, res: Response) => {
  const proposal: IProposal = req.proposal;

  await deleteProposalService(proposal);

  return res.status(204).json({});
};
