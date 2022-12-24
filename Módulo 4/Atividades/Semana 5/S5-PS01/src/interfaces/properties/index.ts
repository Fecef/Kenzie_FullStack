import { ICategoryResponse } from './../categories/index';
export interface IAddressRequest {
    district: string
    zipCode: string
    number?: string
    city: string
    state: string
}

export interface IPropertyRequest {
    value: number
    size: number
    address: IAddressRequest
    categoryId: string
}

export interface IPropertyCreateResponse {
    value: number
    size: number
    address: IAddressRequest
    category: ICategoryResponse
    id: string,
    sold: boolean,
}

