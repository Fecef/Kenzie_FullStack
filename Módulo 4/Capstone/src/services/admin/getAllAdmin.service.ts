import { AppDataSource } from "../../data-source";
import { Admin } from "../../entities/admin.entity";

export const getAllAdminService = async (): Promise<Admin[]> => {
  const adminRepository = AppDataSource.getRepository(Admin);
  const admins = await adminRepository.find();

  return admins;
};
