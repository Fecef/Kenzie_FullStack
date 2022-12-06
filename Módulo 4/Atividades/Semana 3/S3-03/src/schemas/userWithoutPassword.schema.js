import * as yup from "yup";

export const userWithoutPwdShape = yup.object().shape({
    id: yup.string().uuid(),
    name: yup.string()
});