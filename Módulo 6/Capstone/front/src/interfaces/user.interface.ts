import { IAddress, IAddressUpdate } from "./address.interface";
import { IAnnouncement } from "./announcement.interface";
import { IComment } from "./comment.interface";

export interface IUser {
  id?: string;
  description?: string;
  avatar?: string;
  address?: IAddress;
  createdAt?: string;
  updatedAt?: string;
  announcements?: IAnnouncement[];
  comments?: IComment[];
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  password: string;
  accountType: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description?: string | null;
  password: string;
  confirmPassword: string;
  avatar?: string | null;
  address: IAddress;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthdate?: string;
  description?: string;
  password?: string;
  accountType?: string;
  avatar?: string;
}

export interface ICepInfo {
  uf: string;
  localidade: string;
}

export interface IMessageModal {
  textHeader: string;
  textBody: string;
}

export interface IUserContext {
  user: IUser | undefined;
  sessionError: boolean;
  userSession: (data: IUserLogin) => void;
  userRegister: (data: IUserRegister) => void;
  userDelete: () => void;
  userEditProfile: (data: IUserUpdate) => void;
  userEditAddress: (data: IAddressUpdate) => void;
  userListOne: (userId: string | undefined) => Promise<IUser>;
  logout: () => void;
  handleClick: (type: string) => void;
  isProfileModalOpen: boolean;
  isAddressModalOpen: boolean;
  isSucessModalOpen: boolean;
  isErrorModalOpen: boolean;
  isDeleteAccountModalOpen: boolean;
  setIsProfileModalOpen: (value: boolean) => void;
  setIsAddressModalOpen: (value: boolean) => void;
  setIsDeleteAccountModalOpen: (value: boolean) => void;
  setIsSucessModalOpen: (value: boolean) => void;
  setIsErrorModalOpen: (value: boolean) => void;
  userResetPassword: (data: IResetPassword, resetToken: string) => void;
  emailSend: (data: IEmailSubmission) => void;
  isSucessResetPasswordModalOpen: boolean;
  setIsSucessResetPasswordModalOpen: (value: boolean) => void;
  isErrorResetPasswordModalOpen: boolean;
  setIsErrorResetPasswordModalOpen: (value: boolean) => void;
  messageModal: IMessageModal
  setMessageModal: React.Dispatch<React.SetStateAction<IMessageModal>>
  cepValue: string
  setCepValue: React.Dispatch<React.SetStateAction<string>>
  cepInfo: ICepInfo
  setCepInfo: React.Dispatch<React.SetStateAction<ICepInfo>>
  validateCep(): Promise<void>
}

export interface IUserContextProps {
  children: React.ReactNode;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export interface IEmailSubmission {
  email: string;
}
