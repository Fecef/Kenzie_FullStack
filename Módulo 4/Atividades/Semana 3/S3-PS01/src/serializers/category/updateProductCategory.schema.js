import * as yup from "yup";

export const updateProductCategoryShape = yup.object().shape({
    name: yup.string().required()
});