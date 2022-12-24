import * as yup from "yup";
import { IUserLogin } from './../interfaces/users/index';
import { SchemaOf } from "yup";

export const createSessionShape: SchemaOf<IUserLogin> = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});