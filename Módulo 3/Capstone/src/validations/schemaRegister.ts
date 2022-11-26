import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Insira um email de formato valido!"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{6,}/, "Deve ter no minimo 6 digitos")
    .required("Senha obrigatória"),
  confPassword: yup
    .string()
    .required("Confirmação obrigatória")
    .oneOf([yup.ref("password")], "As senhas não são iguais"),
});
