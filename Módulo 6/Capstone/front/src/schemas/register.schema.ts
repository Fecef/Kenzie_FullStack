import * as yup from "yup";

export const registerUserSchema = yup.object().shape({
  name: yup.string().required("Informe seu nome"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Informe seu email"),
  cpf: yup.string().required("Informe seu CPF"),
  phone: yup.string().required("Informe seu número de telefone"),
  birthdate: yup.string().required("Informe sua data de nascimento"),
  description: yup.string().nullable().notRequired(),
  avatar: yup.string().nullable().notRequired(),
  address: yup.object().shape({
    zipCode: yup.string().required("Informe seu CEP"),
    state: yup.string().required("Informe seu estado"),
    city: yup.string().required("Informe sua cidade"),
    street: yup.string().required("Informe o nome de sua rua"),
    number: yup.string().required("Informe o número de sua residência"),
    complement: yup.string().nullable().notRequired(),
  }),

  password: yup
    .string()
    .required("Informe sua senha")
    .matches(
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
    ),
  confirmPassword: yup
    .string()
    .required("Confirme sua Senha")
    .oneOf([yup.ref("password")], "Senhas precisam ser iguais"),
});
