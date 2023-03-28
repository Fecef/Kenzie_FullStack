import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IUser } from "../../interfaces/user";
import { IContactCreateResponse, IContactCreateRequest } from "../../interfaces/contact";
import { createContactResponseShape } from "../../serializers/contact.schema";

export const createContactService = async (user: IUser, contactData: IContactCreateRequest): Promise<IContactCreateResponse> => {
    const contactRepos = AppDataSource.getRepository(Contact);

    const contact = contactRepos.create({ ...contactData, user: user });

    await contactRepos.save(contact)

    const data = await createContactResponseShape.validate(contact, { stripUnknown: true })

    return data;
}