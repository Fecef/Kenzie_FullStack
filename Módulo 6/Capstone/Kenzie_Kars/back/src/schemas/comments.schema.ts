import * as yup from "yup";

export const createCommentRequestSchema = yup.object().shape({
  comment: yup.string().required(),
});
