import { Request, Response } from "express"
import createUserService from "../services/createUser.service"
import listAllUsersService from "../services/listAllUsers.service"

class UserController{
  createUser(req: Request, res: Response) {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
      return res.status(400).json({
        message: "Fields: name, email & password is required."
      })
    }

    const newUser = createUserService({
      name,
      email,
      password
    })

    return res.status(201).json(newUser)
  }

  listAllUsers(req: Request, res: Response){
    const users = listAllUsersService()

    return res.json(users)
  }
}


export default new UserController()