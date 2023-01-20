import { updateUserShape } from "../../../serializers/users.schema";
import { IUpdateUser } from "../../../interface/users.interface";
import { Request } from "express";
import { userEmployerRepo } from "../../../repositories";

export const updateUserEmployerService = async (
  req: Request
): Promise<IUpdateUser> => {
  const updatedUser = userEmployerRepo.create({ ...req.user, ...req.body });
  const newResult = await userEmployerRepo.save(updatedUser);
  return await updateUserShape.validate(newResult, {
    stripUnknown: true,
  });
};
