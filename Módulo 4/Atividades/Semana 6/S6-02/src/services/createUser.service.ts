import { database } from "../database"
import User from "../entities/User"

interface Iuser{
  name: string
  email: string
  password: string
}

export default function({name, email, password}: Iuser) {
  
  const userAlreadyExists = database.find( user => user.email === email)
  
  if(userAlreadyExists) throw new Error("User already exists.")

  const newUser = new User(name, email, password)

  database.unshift(newUser)

  return newUser
}