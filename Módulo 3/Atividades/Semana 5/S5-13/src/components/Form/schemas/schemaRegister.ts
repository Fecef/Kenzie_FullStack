import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "E-mail inválido."
    )
    .required("Campo obrigatório."),
  password: yup
    .string()
    .min(8, "Mínimo de 8 dígitos.")
    .matches(/[a-zA-z]/, "Necessário ao menos 1 letra.")
    .matches(/[0-9]/, "Necessário ao menos 1 número")
    .matches(/[^A-Za-z0-9]/, "Necessário ao menos 1 símbolo.")
    .required("Campo obrigatório."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "A senhas não são iguais"),
  name: yup.string().required("Campo obrigatório."),
  bio: yup.string().required("Campo obrigatório."),
  contact: yup.string().required("Campo obrigatório."),
  course_module: yup.string().required("Campo obrigatório."),
});
