import * as yup from "yup";
import { SchemaOf } from "yup";

import { IContactCreateResponse, IContactCreateRequest } from "../interfaces/contact";

export const createContactRequestShape: SchemaOf<IContactCreateRequest> = yup.object().shape({
    phone: yup.string().max(20).required(),
    email: yup.string().email().max(120).required(),
    name: yup.string().max(120).required(),
});

export const createContactResponseShape: SchemaOf<IContactCreateResponse> = yup.object().shape({
    createdAt: yup.date(),
    phone: yup.string().max(20).required(),
    email: yup.string().email().max(120).required(),
    name: yup.string().max(120).required(),
    id: yup.string()
});

export const listContactResponseShape = yup.array(createContactResponseShape);