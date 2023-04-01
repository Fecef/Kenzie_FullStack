import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLoginRequest } from "../interfaces/user";

export const createSessionShape: SchemaOf<IUserLoginRequest> = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});