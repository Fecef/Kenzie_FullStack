import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Property } from "../../entities/properties.entity";
import { UserToProperty } from "../../entities/userToProperty";
import { IScheduleRequest } from "../../interfaces/schedules";
import { AppError } from "../../errors";

export const createScheduleService = async (scheduleData: IScheduleRequest) => {
    const scheduleRespos = AppDataSource.getRepository(UserToProperty);
    const userRepos = AppDataSource.getTreeRepository(User);
    const propertyRepos = AppDataSource.getTreeRepository(Property);

    const user = await userRepos.findOneBy({ id: scheduleData.userId });
    const property = await propertyRepos.findOneBy({ id: scheduleData.propertyId });

    const day = new Date(scheduleData.date).getDay();
    const hour = new Date(`${day} ${scheduleData.hour}`).getHours();

    const invalidScheducleDate = await scheduleRespos
        .createQueryBuilder("schedules_user_properties")
        .where("schedules_user_properties.date = :date", { date: scheduleData.date })
        .orWhere("schedules_user_properties.hour = :hour", { hour: scheduleData.hour })
        .getOne();

    if (!property) {
        throw new AppError("Property could not be found.", 404);
    }

    if (day === 0 || day === 6) {
        throw new AppError("Not allowed besides business days.");
    }

    if (hour >= 18 || hour < 8) {
        throw new AppError("Not allowed besides business after 6pm.");
    }

    if (invalidScheducleDate) {
        throw new AppError("This date is already being used.", 409);
    }

    const schedule = scheduleRespos.create({
        ...scheduleData,
        user: user,
        property: property
    });

    await scheduleRespos.save(schedule);

    return { message: "Schedule success." };
}