import { StaticImageData } from "next/image";

export interface Condition {
  percentage: number;
  point: number;
}

export interface Discount {
  name: string;
  percentage: number;
  condition: Condition | undefined;

  labelColor: string;
  labelBackgroundColor: string;
  backgroundColor: string;
}

export interface UserData {
  name: string;
  phone: string;
  companyName: string;
  legalAddress: string;
  physicalAddress: string;
  inn: string;
  isAgent: boolean;
}

export interface User {
  id: number;
  login: string;
  email: string;
  data: UserData | undefined;

  token: string;
}

export interface DataForm {
  name: string;
  phone: string;
  email: string;
  isAgent: boolean;
  organization: string;
  uAddress: string;
  isAddressEquals: boolean;
  fAddress: string | null;
  INN: string;
}

export interface IMessage {
  image: string | StaticImageData;
  title: string;
  text: string;
  date: string;
  url: string;
}

export interface IProduct {
  id: string;
  name: string;
  image: string;
  count: number;
  price: number;
  oldPrice: number;
  weight: number;
  isSelected: boolean;
  isAvailable: boolean;
}

export interface IBooking {
  id: number;
  userID: number;
  inn: string;
  name: string;
  address: string;
  mark: string;
  count: number;
  date: string;
  dealerName: string;
  dealerManager: string;
  manager: string;
  phone: string;
  commentary: string;
  status: string;
}

export interface ValidationResult {
  result: boolean;
  badFields: string[];
}

export interface IModal {
  isVisible: boolean;
  text: string;
  link: string;
  buttonText: string;
}
