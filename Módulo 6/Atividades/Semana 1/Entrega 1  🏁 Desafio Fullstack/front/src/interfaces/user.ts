export interface IUser {
    id: string
    name: string
    email: string
    phone: string
    isActive: boolean
    createdAt: Date
}
export interface IUserLogin {
    email: string
    password: string
}