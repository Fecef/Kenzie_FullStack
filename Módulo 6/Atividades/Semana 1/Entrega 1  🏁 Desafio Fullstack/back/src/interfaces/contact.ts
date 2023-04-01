export interface IContact {
    id: string
    name: string
    email: string
    phone: string
    createdAt: Date
}

export interface IContactCreateRequest {
    name: string
    email: string
    phone: string
}

export interface IContactCreateResponse {
    id: string
    name: string
    email: string
    phone: string
    createdAt: Date
}

export interface IContactUpdateRequest {
    name?: string
    email?: string
    phone?: string
}
export interface IContactUpdateResponse {
    id: string
    name: string
    email: string
    phone: string
    createdAt: Date
}