import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const validateUpdatePermissionMiddlweare = async (req: Request, res: Response, next: NextFunction) => {
    const targetId = req.params.id;
    const userId = req.user.id;
    const isAdm = req.user.isAdm;

    if (!isAdm && userId !== targetId) {
        throw new AppError("You are not allowed to do this.", 401);
    }

    return next();
}

export default validateUpdatePermissionMiddlweare;