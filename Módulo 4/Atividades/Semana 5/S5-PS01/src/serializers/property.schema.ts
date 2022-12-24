import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../interfaces/properties";

export const createPropertyShape: SchemaOf<IPropertyRequest> = yup.object().shape({
    value: yup.number().required(),
    size: yup.number().required(),
    address: yup.object().shape({
        district: yup.string().required(),
        zipCode: yup.string().max(8).required(),
        number: yup.string().notRequired(),
        city: yup.string().required(),
        state: yup.string().max(2).required()
    }).required(),
    categoryId: yup.string().required(),
});