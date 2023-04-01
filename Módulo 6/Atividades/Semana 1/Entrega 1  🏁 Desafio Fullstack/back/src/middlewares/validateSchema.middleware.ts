import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const validateSchemaMiddleware = (serializer: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validatedData = await serializer.validate(req.body, {
            stripUnknown: true,
            abortEarly: false,
        });

        req.body = validatedData;

        return next();
    } catch (error) {
        return res.status(400).json({ message: error.errors[0] });
    }
}

export default validateSchemaMiddleware;