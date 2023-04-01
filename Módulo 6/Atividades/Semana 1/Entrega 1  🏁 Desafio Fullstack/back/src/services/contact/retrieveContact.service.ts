import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IContact, IContactCreateResponse } from "../../interfaces/contact";
import { createContactResponseShape } from "../../serializers/contact.schema";

export const retrieveContactService = async (contactData: IContact): Promise<IContactCreateResponse> => {
    const contactRepos = AppDataSource.getRepository(Contact)
    const contact = await contactRepos.findOneBy({ id: contactData.id })

    const data = await createContactResponseShape.validate(contact, { stripUnknown: true });

    return data;
}