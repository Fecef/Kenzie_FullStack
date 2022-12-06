import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";

export const createUserShape = yup.object().shape({
    id: yup.string().uuid().default(() => uuidv4()).transform(() => uuidv4()),
    name: yup.string().lowercase().required(),
    password: yup.string().required()
});