import AppDataSource from "../../data-source"
import { Property } from "../../entities/properties.entity";
import { UserToProperty } from "../../entities/userToProperty"
import { AppError } from "../../errors";

export const listSchedulesByPropertyService = async (scheduleId: string) => {
    const schedulesRepos = AppDataSource.getRepository(UserToProperty);
    const propertyRepos = AppDataSource.getTreeRepository(Property);

    const property = await propertyRepos.findOneBy({ id: scheduleId });

    if (!property) {
        throw new AppError("Property could not be found.", 404);
    }

    const schedule = await schedulesRepos.find({
        relations: {
            user: true,
            property: true
        }
    });

    return { schedules: schedule };
}