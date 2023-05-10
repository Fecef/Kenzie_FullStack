import { IUserLogin } from './../../../front/src/interfaces/user.interface';
import * as yup from "yup";

export const loginRequestSchema: yup.SchemaOf<IUserLogin> = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
