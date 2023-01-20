import { AppDataSource } from "../../data-source";
import { Admin } from "../../entities/admin.entity";
import { AppError } from "../../errors";

export const deleteAdminService = async (adminId: string): Promise<void> => {
  const serviceRepository = AppDataSource.getRepository(Admin);

  const service = await serviceRepository.findOneBy({ id: adminId });

  if (!service) {
    throw new AppError("Admin not found!", 404);
  }

  await serviceRepository
    .createQueryBuilder()
    .delete()
    .from(Admin)
    .where("id = :id", { id: adminId })
    .execute();

  return;
};
