import * as yup from "yup";

export const createProductShape = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required()
});