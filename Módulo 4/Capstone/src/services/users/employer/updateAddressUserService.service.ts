import { IUserResponse } from "../../../interface/users.interface";
import { addressRepo, userEmployerRepo } from "../../../repositories";
import { Request } from "express";
import { userResponseShape } from "../../../serializers/users.schema";

export const updateAddressUserService = async (
  req: Request
): Promise<IUserResponse> => {
  const userFound = await userEmployerRepo.findOneBy({ id: req.user.id });
  let entityAddress = {};

  if (userFound.address) {
    entityAddress = addressRepo.create({
      ...req.body,
      id: userFound.address.id,
    });
  } else {
    entityAddress = addressRepo.create(req.body);
  }

  const updateAddress = await addressRepo.save(entityAddress);
  const addr = await addressRepo.findOneBy({ id: updateAddress.id });
  await userEmployerRepo.update({ id: req.user.id }, { address: addr });

  const user = await userEmployerRepo.findOne({
    where: {
      id: req.user.id,
    },
    relations: {
      address: true,
    },
  });

  const data = await userResponseShape.validate(user, {
    stripUnknown: true,
  });

  return data;
};
