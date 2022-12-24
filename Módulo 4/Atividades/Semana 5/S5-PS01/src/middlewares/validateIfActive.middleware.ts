import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const validateIfActiveMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const isActive = req.foundUser.isActive;

    if (!isActive) {
        throw new AppError("User already inactive.");
    }

    return next();
}

export default validateIfActiveMiddleware;