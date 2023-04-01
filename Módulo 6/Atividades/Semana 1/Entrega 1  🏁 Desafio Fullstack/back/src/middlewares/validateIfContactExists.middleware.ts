import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../errors";

const validateIfContactExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const contactRepos = AppDataSource.getRepository(Contact);
    try {
        const contact = await contactRepos
            .createQueryBuilder("contact")
            .where("contact.id = :id", { id: req.params.id })
            .andWhere("contact.userId = :userId", { userId: req.user.id })
            .getOne();

        if (!contact) {
            throw new AppError("Contact not found.", 404);
        }

        req.foundContact = contact;

        return next();

    } catch (error) {
        throw new AppError("Contact not found.", 404);
    }
};

export default validateIfContactExistsMiddleware;