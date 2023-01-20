import { IAdminPostRequest } from "../../../interface/admin.interface";

export const mockedUpdateAddress = {
  street: "Vale do caxaubas",
  zipCode: "4021846",
  number: "25",
  city: "Diadema",
  state: "São Paulo",
};

export const mockedUpdateUser = {
  gender: "female",
};

export const mockedUpdateServiceUser = {
  services: ["Hidraulica"],
};

export const mockedAdminRegister: IAdminPostRequest = {
  email: "adm@mail.com",
  password: "123456",
};

export const mockedCreateService = {
  name: "Hidraulica",
};