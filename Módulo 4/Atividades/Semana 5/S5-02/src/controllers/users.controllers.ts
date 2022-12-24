import { Request, Response } from 'express'
import listAllCommunitiesUserService from '../services/users/listAllCommunities.service'

const listAllCommunitiesUsersControllers = async(req: Request, res: Response) => {

    const userId = parseInt(req.params.id)
    const data = await listAllCommunitiesUserService(userId)
    return res.json(data)

}

export { listAllCommunitiesUsersControllers }