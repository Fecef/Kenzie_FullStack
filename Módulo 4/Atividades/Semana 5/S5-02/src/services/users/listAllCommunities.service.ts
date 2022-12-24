import AppDataSource from "../../data-source"
import { Community } from "../../entities/community.entity"

const listAllCommunitiesUserService = async (userId: number) => {
    const communityRepos = AppDataSource.getRepository(Community);
    const communityQueryBuilder = communityRepos.createQueryBuilder('communities');

    const communities = await communityQueryBuilder
        .where("communities.id = :id", { id: userId })
        .getMany();

    return communities;
}

export default listAllCommunitiesUserService;