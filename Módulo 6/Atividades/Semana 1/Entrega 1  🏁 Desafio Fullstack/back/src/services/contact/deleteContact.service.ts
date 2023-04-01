import { Contact } from './../../entities/contact.entity';
import AppDataSource from "../../data-source";
import { IContact } from '../../interfaces/contact';

export const deleteContactService = async (contact: IContact): Promise<void> => {
    const contactRepos = AppDataSource.getRepository(Contact);
    const foundContact = await contactRepos.findOneBy({ id: contact.id });

    await contactRepos.remove(foundContact);
}