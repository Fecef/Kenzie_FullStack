import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { createContactResponseShape } from './../../serializers/contact.schema';
import { IContact, IContactUpdateRequest } from './../../interfaces/contact';
import { IContactUpdateResponse } from "../../interfaces/contact";

export const updateContactService = async (contact: IContact, contactData: IContactUpdateRequest): Promise<IContactUpdateResponse> => {
    const contactRepos = AppDataSource.getRepository(Contact)
    const contact_new = contactRepos.create({ ...contact, ...contactData })

    await contactRepos.save(contact_new)

    const data = await createContactResponseShape.validate(contact_new, { stripUnknown: true })

    return data;
}