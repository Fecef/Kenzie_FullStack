import { Announcement, Comment } from "@prisma/client";

export interface ICreateUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: Date;
  description?: string;
  password: string;
  accountType: string;
  avatar?: string;
  address: IAddress;
}

export interface ICreateUserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: Date;
  description?: string;
  accountType: string;
  avatar?: string | null;
  address: IAddress;
}

export interface IAddress {
  id?: string;
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  zipCode: string;
  userId?: string;
}

export interface IUserSession {
  email: string;
  password: string;
}

export interface IGetUserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: Date;
  description?: string;
  accountType: string;
  avatar?: string | null;
  address: IAddress;
  announcements: Announcement[];
  comments: Comment[];
}

export interface IUpdateUserRequest {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthdate?: Date;
  description?: string;
  password?: string;
  accountType?: string;
  avatar?: string;
}

export interface IUpdateAddressRequest {
  street?: string;
  number?: string;
  complement?: string | null;
  city?: string;
  state?: string;
  zipCode?: string;
}
