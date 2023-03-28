import AppDataSource from "../../data-source";
import { IUser } from './../../interfaces/user';
import { Contact } from "../../entities/contact.entity";
import { IContactCreateResponse } from "../../interfaces/contact";
import { listContactResponseShape } from "../../serializers/contact.schema";

export const listContactService = async (user: IUser): Promise<IContactCreateResponse[]> => {
    const contactRepos = AppDataSource.getRepository(Contact)
    const contactsList = await contactRepos
        .createQueryBuilder("contact")
        .innerJoinAndSelect("contact.user", "user")
        .where("user.id = :userId", { userId: user.id })
        .getMany();

    const data = await listContactResponseShape.validate(contactsList, { stripUnknown: true });

    return data;
}