import { Product } from "./Product";

export interface FormOrder {
  name: string;
  phone: string;
  email: string;
  address: string;
  payment: string;
}

export interface Order {
  _id: string;
  user: string;
  address: string;
  phone: string;
  name: string;
  payment: string;
  products: CartProduct[];
  totalAmount: number;
  status: string;
  createdAt: string;
}

export interface ApiResOrder {
  message: string;
  data: Order[];
}

export interface CartProduct {
  product: Product;
  quantity: number;
  _id: string;
}
