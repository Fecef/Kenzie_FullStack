import * as yup from "yup";

export const imageSchema = yup.object().shape({
  imgUrl: yup.string().url().notRequired(),
});
