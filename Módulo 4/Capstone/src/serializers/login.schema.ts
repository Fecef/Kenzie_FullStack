import * as yup from "yup";
import { SchemaOf } from "yup";
import { ILoginRequest } from "../interface";

export const loginShape: SchemaOf<ILoginRequest> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
