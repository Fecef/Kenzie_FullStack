import * as yup from "yup";

import * as Interfaces from "../interfaces";

export const createAnnouncementSchema: yup.SchemaOf<Interfaces.ICreateAnnoucementRequest> =
  yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.number().required(),
    mileage: yup.number().required(),
    color: yup.string().required(),
    price: yup.number().required(),
    priceFipe: yup.number().required(),
    fuelType: yup.string().required(),
    description: yup.string().required(),
    banner: yup.string().required(),
    images: yup.array().of(yup.string().notRequired()).notRequired(),
  });

export const updateAnnouncementSchema: yup.SchemaOf<Interfaces.IUpdateAnnoucementRequest> =
  yup.object().shape({
    brand: yup.string(),
    model: yup.string(),
    year: yup.number(),
    mileage: yup.number(),
    color: yup.string(),
    price: yup.number(),
    priceFipe: yup.number(),
    fuelType: yup.string(),
    description: yup.string(),
    banner: yup.string(),
  });
