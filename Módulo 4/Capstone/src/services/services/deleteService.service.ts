import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Services } from "../../entities/services.entity";
import { AppError } from "../../errors";

export const deleteServiceService = async (
  serviceId: string
): Promise<void> => {
  const serviceRepository = AppDataSource.getRepository(Services);

  const service = await serviceRepository.findOneBy({ id: serviceId });

  if (!service) {
    throw new AppError("Service not found!", 404);
  }

  await serviceRepository
    .createQueryBuilder()
    .delete()
    .from(Services)
    .where("id = :id", { id: serviceId })
    .execute();

  return;
};
