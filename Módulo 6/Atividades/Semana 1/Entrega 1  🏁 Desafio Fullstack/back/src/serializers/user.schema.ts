import * as yup from "yup";
import { SchemaOf } from "yup";

import { IUserRegisterRequest, IUserRegisterResponse, IUserUpdateRequest } from "../interfaces/user";

export const createUserRequestShape: SchemaOf<IUserRegisterRequest> = yup.object().shape({
    name: yup.string().max(120).required(),
    email: yup.string().email().max(120).required(),
    password: yup.string().min(4).max(120).required(),
    phone: yup.string().max(20).required(),
});

export const createUserResponseShape: SchemaOf<IUserRegisterResponse> = yup.object().shape({
    createdAt: yup.date(),
    isActive: yup.boolean(),
    phone: yup.string().max(20).required(),
    email: yup.string().email().max(120).required(),
    name: yup.string().max(120).required(),
    id: yup.string()
});

export const listUserResponseShape = yup.array(createUserResponseShape);

export const updateUserRequestShape: SchemaOf<IUserUpdateRequest> = yup.object().shape({
    phone: yup.string().max(20),
    password: yup.string().min(4).max(120),
    email: yup.string().email().max(120),
    name: yup.string().max(120),
});