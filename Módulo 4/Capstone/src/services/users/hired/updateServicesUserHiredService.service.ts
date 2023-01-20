import { Request } from "express";
import { AppDataSource } from "../../../data-source";
import { Services } from "../../../entities/services.entity";
import { UserHired } from "../../../entities/userHired.entity";
import { IService } from "../../../interface/services.interface";

export const updateServicesUserHiredService = async (req: Request) => {
    const servicesRepo = AppDataSource.getRepository(Services);
    const userHiredRepo = AppDataSource.getRepository(UserHired);
    const userFound = await userHiredRepo.findOneBy({ id: req.user.id });
    const services = await servicesRepo.find();

    const servicesList = [];
    req.body.services.forEach((el: string) => {
        const serviceItem = services.find((serv: IService) => serv.name === el);
        if (serviceItem != undefined) servicesList.push(serviceItem);
    });

    const data = { ...userFound, services: servicesList };
    const newServiceAdd = userHiredRepo.create(data);
    return await userHiredRepo.save(newServiceAdd);
};
