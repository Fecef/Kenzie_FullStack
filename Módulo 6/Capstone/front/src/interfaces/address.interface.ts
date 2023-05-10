export interface IAddress {
  id?: string;
  complement?: string;
  userId?: string;
  street: string;
  number: string;
  city: string;
  state: string;
  zipCode: string;
}
export interface IAddressUpdate {
  complement?: string;
  street?: string;
  number?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}