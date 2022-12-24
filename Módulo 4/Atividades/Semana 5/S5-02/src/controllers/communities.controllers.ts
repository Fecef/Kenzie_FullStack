import { Request, Response } from 'express'
import listAllUsersCommunitiesService from '../services/communities/listAllCommunities.service'

const listAllUsersCommunitiesController = async(req: Request, res: Response) => {

    const communityId = parseInt(req.params.id)
    const data = await listAllUsersCommunitiesService(communityId)
    return res.json(data)

}

export { listAllUsersCommunitiesController }