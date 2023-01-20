import { AppDataSource } from "../data-source";
import { Address } from "../entities/address.entity";
import { Proposals } from "../entities/proposal.entity";
import { Rating } from "../entities/rating.entity";
import { Services } from "../entities/services.entity";
import { UserEmployer } from "../entities/userEmployer.entity";
import { UserHired } from "../entities/userHired.entity";

export const userHiredRepo = AppDataSource.getRepository(UserHired);
export const userEmployerRepo = AppDataSource.getRepository(UserEmployer);
export const addressRepo = AppDataSource.getRepository(Address);
export const servicesRepo = AppDataSource.getRepository(Services);
export const proposalRepository = AppDataSource.getRepository(Proposals);
export const ratingRepository = AppDataSource.getRepository(Rating);
