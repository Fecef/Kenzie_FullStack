import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "yup";
import { Assign, ObjectShape } from "yup/lib/object";

export const validateSchemaMiddleware =
  (serializer: ObjectSchema<Assign<ObjectShape, any>>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await serializer.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });
      req.body = validated;
      next();
    } catch (error) {
      return res.status(400).json({ message: error.errors });
    }
  };
