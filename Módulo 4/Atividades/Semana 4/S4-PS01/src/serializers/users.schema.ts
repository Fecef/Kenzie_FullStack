import * as yup from "yup";
import { IUserRequest, IUserUpdate } from './../interfaces/user.interface';
import { SchemaOf } from "yup";
import { IUserWithoutPwd } from "../interfaces/user.interface";

export const createUserShape: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().max(120).required(),
    email: yup.string().email().max(120).required(),
    password: yup.string().min(6).max(120).required(),
    isAdm: yup.boolean().required()
});

export const userDataWithoutPwdShape: SchemaOf<IUserWithoutPwd> = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    isAdm: yup.boolean().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired()
});

export const listUsersShape = yup.array(userDataWithoutPwdShape);

export const updateUserShape: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired(),
});