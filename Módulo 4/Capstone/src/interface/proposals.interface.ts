import { IEmployer, IHired, IRating } from "./users.interface";

export interface IProposalPostRequest {
  title: string;
  description: string;
}

export interface IProposal extends IProposalPostRequest {
  id: string;
  title: string;
  description: string;
  status: string;
  employer?: IEmployer;
  hired?: IHired;
  rating?: IRating;
}

export interface IProposalStatusRequest {
  status: string;
}

export interface IProposalRatingRequest {
  rating?: IRating;
}

export interface IProposalResponse extends IProposalPostRequest {
  employer: IEmployer;
  hired: IHired;
}
