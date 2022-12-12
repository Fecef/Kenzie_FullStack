import * as yup from "yup";

export const createProductCategoryShape = yup.object().shape({
    name: yup.string().required()
});