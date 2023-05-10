import * as yup from "yup";
import {
  ICreateUserRequest,
  ICreateUserResponse,
  IGetUserResponse,
  IResetPasswordRequest,
  ISendResetEmailPasswordRequest,
  IUpdateAddressRequest,
  IUpdateUserRequest,
} from "../interfaces";

export const createUserRequestSchema: yup.SchemaOf<ICreateUserRequest> = yup
  .object()
  .shape({
    name: yup.string().max(50).required(),
    email: yup.string().max(50).email().required(),
    cpf: yup.string().max(20).required(),
    phone: yup.string().max(20).required(),
    birthdate: yup.date().required(),
    description: yup.string().notRequired(),
    password: yup.string().max(20).required(),
    accountType: yup.string().required(),
    avatar: yup.string().max(100).notRequired().nullable(true),
    address: yup
      .object()
      .shape({
        street: yup.string().max(50).required(),
        number: yup.string().max(10).required(),
        complement: yup.string().max(50).notRequired(),
        city: yup.string().max(50).required(),
        state: yup.string().max(50).required(),
        zipCode: yup.string().max(10).required(),
      })
      .required(),
  });

export const createUserResponseSchema: yup.SchemaOf<ICreateUserResponse> = yup
  .object()
  .shape({
    address: yup
      .object()
      .shape({
        zipCode: yup.string(),
        state: yup.string(),
        city: yup.string(),
        complement: yup.string().notRequired().nullable(),
        number: yup.string(),
        street: yup.string(),
        id: yup.string(),
      })
      .required(),
    avatar: yup.string().notRequired().nullable(),
    accountType: yup.string(),
    description: yup.string().notRequired().nullable(),
    birthdate: yup.date(),
    phone: yup.string(),
    cpf: yup.string(),
    email: yup.string().email(),
    name: yup.string(),
    id: yup.string(),
  });

export const getUserResponseSchema: yup.SchemaOf<IGetUserResponse> = yup
  .object()
  .shape({
    announcements: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.string(),
          brand: yup.string(),
          model: yup.string(),
          year: yup.number(),
          mileage: yup.number(),
          price: yup.number(),
          priceFipe: yup.number(),
          fuelType: yup.string(),
          color: yup.string(),
          banner: yup.string(),
          description: yup.string(),
          isActive: yup.boolean(),
          isGoodBuy: yup.boolean(),
          createdAt: yup.date(),
          updatedAt: yup.date(),
          userId: yup.string(),
        })
      )
      .notRequired(),

    comments: yup.array().of(
      yup.object().shape({
        id: yup.string(),
        comment: yup.string(),
        createdAt: yup.date(),
        updatedAt: yup.date(),
        announcementId: yup.string(),
        userId: yup.string(),
      })
    ),
    address: yup
      .object()
      .shape({
        zipCode: yup.string(),
        state: yup.string(),
        city: yup.string(),
        complement: yup.string().notRequired().nullable(),
        number: yup.string(),
        street: yup.string(),
        id: yup.string(),
      })
      .required(),
    avatar: yup.string().notRequired().nullable(),
    accountType: yup.string(),
    description: yup.string().notRequired().nullable(),
    birthdate: yup.date(),
    phone: yup.string(),
    cpf: yup.string(),
    email: yup.string().email(),
    name: yup.string(),
    id: yup.string(),
  });

export const updateUserRequestSchema: yup.SchemaOf<IUpdateUserRequest> = yup
  .object()
  .shape({
    name: yup.string().max(50).notRequired(),
    email: yup.string().email().max(50).notRequired(),
    cpf: yup.string().max(20).notRequired(),
    phone: yup.string().max(20).notRequired(),
    birthdate: yup.date().notRequired(),
    description: yup.string().notRequired(),
    password: yup.string().max(20).notRequired(),
    accountType: yup.string().notRequired(),
    avatar: yup.string().max(100).notRequired().nullable(),
  });

export const updateUserAddressRequestSchema: yup.SchemaOf<IUpdateAddressRequest> =
  yup.object().shape({
    zipCode: yup.string().max(10).notRequired(),
    state: yup.string().max(50).notRequired(),
    city: yup.string().max(50).notRequired(),
    complement: yup.string().max(50).notRequired().nullable(),
    number: yup.string().max(10).notRequired(),
    street: yup.string().max(50).notRequired(),
  });

export const sendResetEmailPasswordSchema: yup.SchemaOf<ISendResetEmailPasswordRequest> =
  yup.object().shape({
    email: yup.string().email().max(50).required(),
  });

export const resetPasswordSchema: yup.SchemaOf<IResetPasswordRequest> = yup
  .object()
  .shape({
    password: yup.string().max(20).required(),
  });
