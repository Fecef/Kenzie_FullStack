import { SchemaOf } from "yup";
import * as yup from "yup";
import { IService } from "../interface/services.interface";

export const createServiceShape: SchemaOf<IService> = yup.object().shape({
  name: yup.string().required(),
});
