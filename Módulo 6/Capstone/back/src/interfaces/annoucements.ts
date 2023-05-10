import { Comments, Announcement, Address } from "@prisma/client";

export interface IGetAllAnnoucementsResponse {
    accountType: string;
    addresses: Address[];
    announcements: Announcement[];
    comments: Comment[];
    birthdate: Date;
    cpf: string;
    createdAt: Date;
    description: string;
    email: string;
    id: string;
    name: string;
    phone: string;
    updatedAt: Date;
}

export interface ICreateAnnoucementRequest {
    brand: string;
    model: string;
    year: number;
    mileage: number;
    color: string;
    price: number;
    priceFipe: number;
    fuelType: string;
    description: string;
    banner: string;
}

export interface IUpdateAnnoucementRequest {
    brand?: string;
    model?: string;
    year?: number;
    mileage?: number;
    color?: string;
    price?: number;
    priceFipe?: number;
    fuelType?: string;
    description?: string;
    banner?: string;
}
