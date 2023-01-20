import { AppDataSource } from "../../data-source";
import { Services } from "../../entities/services.entity";

export const getAllServicesService = async (): Promise<Services[]> => {
  const serviceRepository = AppDataSource.getRepository(Services);
  const services = await serviceRepository.find();

  return services;
};
