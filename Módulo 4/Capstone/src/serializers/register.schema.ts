import * as yup from "yup";
import { SchemaOf } from "yup";
import { ILoginRequest, IRegisterRequest } from "../interface";
import {
  IAdmWithoutPass,
  IUserWithoutPass,
} from "../interface/users.interface";

export const createUserShape: SchemaOf<IRegisterRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  avatar_img: yup.string().url().required(),
  password: yup.string().required(),
  is_hired: yup.boolean().required(),
});

export const returnCreateUserSerializer: SchemaOf<IUserWithoutPass> = yup
  .object()
  .shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string().email(),
  });

export const createAdminShape: SchemaOf<ILoginRequest> = yup.object().shape({
  password: yup.string().required(),
  email: yup.string().email().required(),
});

export const createAdminResponseShape: SchemaOf<IAdmWithoutPass> = yup
  .object()
  .shape({
    id: yup.string(),
    email: yup.string().email(),
  });
