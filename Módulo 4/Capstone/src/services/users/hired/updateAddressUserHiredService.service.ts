import { addressRepo, userHiredRepo } from "../../../repositories";
import { Request } from "express";
import { AppDataSource } from "../../../data-source";
import { Address } from "../../../entities/address.entity";
import { UserHired } from "../../../entities/userHired.entity";
import { IUserResponse } from "../../../interface/users.interface";

export const updateAddressUserHiredService = async (
  req: Request
): Promise<IUserResponse> => {
  const addressHiredRepo = AppDataSource.getRepository(Address);
  const userHiredRepo = AppDataSource.getRepository(UserHired);
  const userFound = await userHiredRepo.findOneBy({ id: req.user.id });

  let entityAddress = {};

  if (userFound.address) {
    entityAddress = addressHiredRepo.create({
      ...req.body,
      id: userFound.address.id,
    });
  } else {
    entityAddress = addressHiredRepo.create(req.body);
  }
  const updateAddress = await addressHiredRepo.save(entityAddress);
  const addr = await addressHiredRepo.findOneBy({ id: updateAddress.id });

  await userHiredRepo.update({ id: req.user.id }, { address: addr });

  const user = await userHiredRepo.findOne({
    where: {
      id: req.user.id,
    },
    relations: {
      address: true,
    },
  });

  return user;
};
