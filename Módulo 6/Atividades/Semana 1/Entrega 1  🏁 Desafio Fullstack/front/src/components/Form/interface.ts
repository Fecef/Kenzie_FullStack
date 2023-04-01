export interface IFormLogin {
    email: string,
    password: string
}

export interface IFormRegister {
    name: string,
    email: string,
    password: string,
    phone: string
}

export interface IFormPerfil {
    name?: string,
    email?: string,
    password?: string,
    phone?: string
}

export interface IContactPerfil {
    name?: string,
    email?: string,
    phone?: string
}