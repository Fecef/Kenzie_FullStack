import { AppError } from './../errors';
import { Request, Response, NextFunction } from "express";

const validateAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const isAdm = req.user.isAdm;

    if (!isAdm) {
        throw new AppError("You don't have permission.", 403);
    }

    return next();
}

export default validateAdmMiddleware;