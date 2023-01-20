import { updateUserShape } from "../../../serializers/users.schema";
import { IUpdateUser } from "../../../interface/users.interface";
import { userHiredRepo } from "../../../repositories";
import { Request } from 'express'

export const updateUserHiredService = async (req: Request): Promise<IUpdateUser> => {   
    const updatedUser = userHiredRepo.create({ ...req.user, ...req.body });
    const newResult = await userHiredRepo.save(updatedUser);
    return await updateUserShape.validate(newResult, {
      stripUnknown: true,
    });
};
