export interface IUser {
    id: string
    name?: string
    email?: string
    password?: string
    phone?: string
    isActive?: boolean
    createdAt?: Date
}
export interface IUserRegisterRequest {
    name: string
    email: string
    password: string
    phone: string
}

export interface IUserRegisterResponse {
    id: string
    name: string
    email: string
    phone: string
    isActive: boolean
    createdAt: Date
}

export interface IUserLoginRequest {
    email: string
    password: string
}

export interface IUserUpdateRequest {
    name?: string
    email?: string
    phone?: string
    password?: string
}