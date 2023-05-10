import * as yup from "yup";

import { IUserLogin } from "../interfaces/user.interface";

export const loginUserSchema: yup.ObjectSchema<IUserLogin> = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Informe seu email"),
    password: yup
      .string()
      .required("Informe sua senha")
      .matches(
        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
      ),
  });
