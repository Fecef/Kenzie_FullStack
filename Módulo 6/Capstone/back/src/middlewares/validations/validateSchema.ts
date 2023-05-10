import { Request, Response, NextFunction } from "express";
import * as yup from "yup";

export const validateSchema =
  (schema: yup.BaseSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.body = validated;
      return next();
    } catch (err: any) {
      return res.status(400).json({
        message: err.message,
      });
    }
  };
