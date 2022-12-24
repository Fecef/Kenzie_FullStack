import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"

//Service que irá listar todos os usuários de determinada comunidades
const listAllUsersCommunitiesService = async (communityId: number) => {
    const userRepos = AppDataSource.getRepository(User);
    const userQueryBuilder = userRepos.createQueryBuilder('users');

    const users = await userQueryBuilder
        .where("users.id = :id", { id: communityId })
        .getMany();

    return users;
}

export default listAllUsersCommunitiesService;