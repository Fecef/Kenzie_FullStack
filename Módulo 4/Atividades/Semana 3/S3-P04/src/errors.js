export class BodyResponseError extends Error {
    constructor(message, statusCode = 400) {
        super();
        this.message = { message };
        this.statusCode = statusCode;
    }
}

export const errorHandler = (err, req, res, next) => {
    if (err instanceof BodyResponseError) {
        return res.status(err.statusCode).json(err.message);
    }

    console.error(err);

    return res.status(500).json({ message: "Internal Server Error." });
};