import { Request, Response, NextFunction } from "express";

import { prisma } from "../../database";
import { AppError } from "../../errors";

export const verifyDuplicateAnnoucementMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const existAnnoucement = await prisma.announcement.findFirst({
        where: {
            id: req.params.id,
        },
    });
    if (existAnnoucement) {
        throw new AppError("Annoucement Already Exist");
    }
    return next();
};
