import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const validadeUpdateFieldsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const hasId = req.body.hasOwnProperty("id");
    const hasIsActive = req.body.hasOwnProperty("isActive");
    const hasIsAdm = req.body.hasOwnProperty("isAdm");

    if (hasId || hasIsActive || hasIsAdm) {
        throw new AppError("Not allowed to update this field.", 401);
    }

    return next();
}

export default validadeUpdateFieldsMiddleware;