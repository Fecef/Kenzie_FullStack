export const validateSchemaMiddleware = (serializer) => async (req, res, next) => {
    try {
        const validatedBody = await serializer.validate(req.body, {
            stripUnknown: true,
            abortEarly: false,
        });

        req.validatedBody = validatedBody;

        return next();
    } catch (error) {
        return res.status(400).json({ message: error.errros });
    }
};