import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IProposal,
  IProposalPostRequest,
  IProposalRatingRequest,
  IProposalStatusRequest,
} from "../interface/proposals.interface";

const SchemaProposalsAddress = {
  id: yup.string().notRequired(),
  street: yup.string().notRequired(),
  zipCode: yup.string().notRequired(),
  number: yup.string().notRequired(),
  city: yup.string().notRequired(),
  state: yup.string().notRequired(),
};

const SchemaProposalsServices = {
  id: yup.string().required(),
  name: yup.string().required(),
};

const SchemaProposalsEmployer = {
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  avatar_img: yup.string().url().required(),
  address: yup.object().shape(SchemaProposalsAddress).required(),
};

const SchemaProposalsHired = {
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  avatar_img: yup.string().url().required(),
  address: yup.object().shape(SchemaProposalsAddress).notRequired(),
  services: yup.array(yup.object().shape(SchemaProposalsServices)).required(),
};

const SchemaProposalsRating = {
  id: yup.string().notRequired(),
  recommendation: yup.string().notRequired(),
  note: yup.number().notRequired(),
};

export const createProposalRequestShape: SchemaOf<IProposalPostRequest> = yup
  .object()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
  });

export const updateStatusRequestShape: SchemaOf<IProposalStatusRequest> = yup
  .object()
  .shape({
    status: yup.string().required(),
  });

export const updateRatingRequestShape: SchemaOf<IProposalRatingRequest> = yup
  .object()
  .shape({
    rating: yup.object().shape(SchemaProposalsRating).required(),
  });

export const proposalResponseShape: SchemaOf<IProposal> = yup.object().shape({
  id: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  status: yup.string().required(),
  employer: yup.object().shape(SchemaProposalsEmployer).required(),
  hired: yup.object().shape(SchemaProposalsHired).required(),
  rating: yup.object().shape(SchemaProposalsRating).notRequired().nullable(),
});

export const proposalsResponseShapes = yup.array(proposalResponseShape);
