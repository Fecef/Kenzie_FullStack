import * as yup from "yup";

export const updateUserSchema: any = yup
  .object()
  .shape({
    name: yup.string().max(50).notRequired(),
    email: yup.string().email().max(50).notRequired(),
    cpf: yup.string().max(20).notRequired(),
    phone: yup.string().max(20).notRequired(),
    birthdate: yup.date().notRequired(),
    description: yup.string().notRequired(),
    password: yup.string().max(20).notRequired(),
    accountType: yup.string().notRequired(),
    avatar: yup.string().max(100).notRequired().nullable(),
  });

  export const updateUserAddressSchema: any =
  yup.object().shape({
    zipCode: yup.string().max(10).notRequired(),
    state: yup.string().max(50).notRequired(),
    city: yup.string().max(50).notRequired(),
    complement: yup.string().max(50).notRequired().nullable(),
    number: yup.string().max(10).notRequired(),
    street: yup.string().max(50).notRequired(),
  });
