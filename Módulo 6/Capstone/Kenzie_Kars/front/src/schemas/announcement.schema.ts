import * as yup from "yup";

import { IAnnouncementRegister } from "../interfaces/announcement.interface";
import { imageSchema } from "./image.schema";

export const registerAnnouncementSchema: yup.ObjectSchema<IAnnouncementRegister> =
  yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.number().required(),
    mileage: yup.number().required(),
    price: yup.number().required(),
    priceFipe: yup.number().required(),
    fuelType: yup.string().required(),
    color: yup.string().required(),
    banner: yup.string().url().required(),
    description: yup.string().required(),
    images: yup.array().of(imageSchema).required(),
  });

export const updateAnnouncementSchema: any = yup.object().shape({
  brand: yup.string().notRequired(),
  model: yup.string().notRequired(),
  year: yup.number().notRequired(),
  mileage: yup.number().notRequired(),
  color: yup.string().notRequired(),
  price: yup.number().notRequired(),
  priceFipe: yup.number().notRequired(),
  fuelType: yup.string().notRequired(),
  description: yup.string().notRequired(),
  images: yup.array().of(imageSchema).notRequired(),
  banner: yup.string().url().notRequired(),
});
