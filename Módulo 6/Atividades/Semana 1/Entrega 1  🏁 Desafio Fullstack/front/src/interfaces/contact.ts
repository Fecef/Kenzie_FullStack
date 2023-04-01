export interface IContact {
    id: string
    name: string
    email: string
    phone: string
    createdAt: string
}

export interface IContactCreate {
    name: string
    email: string
    phone: string
}