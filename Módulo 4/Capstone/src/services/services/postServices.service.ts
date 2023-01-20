import { AppDataSource } from "../../data-source";
import { Services } from "../../entities/services.entity";
import { AppError } from "../../errors";
import { IService } from "../../interface/services.interface";

export const postServiceService = async (
  userData: IService
): Promise<Services> => {
  const serviceRepository = AppDataSource.getRepository(Services);
  let service = await serviceRepository.findOneBy({ name: userData.name });

  if (service) {
    throw new AppError("Service already exist!", 409);
  }

  service = serviceRepository.create(userData);
  await serviceRepository.save(service);

  return service;
};
