
import * as yup from "yup";

export const updateProductShape = yup.object().shape({
    name: yup.string().notRequired(),
    price: yup.number().notRequired()
});
