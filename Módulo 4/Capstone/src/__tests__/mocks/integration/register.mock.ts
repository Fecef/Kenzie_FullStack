import { IRegisterRequest } from "../../../interface";
import { IAdminPostRequest } from "../../../interface/admin.interface";

export const mockedEmployerRegister: IRegisterRequest = {
  name: "employer",
  email: "employer@mail.com",
  password: "123456",
  avatar_img:
    "https://s2.glbimg.com/DoglxpDBZa0F0JYBJWADVpDKV1c=/0x70:815x545/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/u/k/cjrDnjSbupcRaUUmwiVw/ragnarok-online-2-1.jpg",
  is_hired: false,
};

export const mockedHiredRegister: IRegisterRequest = {
  name: "hired",
  email: "hired@mail.com",
  password: "123456",
  avatar_img:
    "https://s2.glbimg.com/DoglxpDBZa0F0JYBJWADVpDKV1c=/0x70:815x545/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/u/k/cjrDnjSbupcRaUUmwiVw/ragnarok-online-2-1.jpg",
  is_hired: true,
};

export const mockedEmployerRegister_2: IRegisterRequest = {
  name: "employer_2",
  email: "employer_2@mail.com",
  password: "123456",
  avatar_img:
    "https://s2.glbimg.com/DoglxpDBZa0F0JYBJWADVpDKV1c=/0x70:815x545/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/u/k/cjrDnjSbupcRaUUmwiVw/ragnarok-online-2-1.jpg",
  is_hired: false,
};

export const mockedHiredRegister_2: IRegisterRequest = {
  name: "hired_2",
  email: "hired_2@mail.com",
  password: "123456",
  avatar_img:
    "https://s2.glbimg.com/DoglxpDBZa0F0JYBJWADVpDKV1c=/0x70:815x545/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/u/k/cjrDnjSbupcRaUUmwiVw/ragnarok-online-2-1.jpg",
  is_hired: true,
};

export const mockedAdminRegister: IAdminPostRequest = {
  email: "adm@mail.com",
  password: "123456",
};
