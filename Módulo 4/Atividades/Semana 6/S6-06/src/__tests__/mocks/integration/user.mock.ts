import { IUserCreate, IUserLogin } from "../../../interfaces/user";

export const mockedUserRequest: IUserCreate = {
    name: "name",
    email: "email@mail.com",
    password: "123456"
}

export const mockedUserLogin: IUserLogin = {
    email: "email@mail.com",
    password: "123456"
}