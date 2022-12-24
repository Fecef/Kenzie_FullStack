import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICategoryRequest } from "../interfaces/categories";

export const categoryCreateShape: SchemaOf<ICategoryRequest> = yup.object().shape({
    name: yup.string().max(50).required()
});