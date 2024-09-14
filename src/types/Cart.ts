import { Product } from "./Product";

export interface CartProduct {
  product: Product;
  quantity: number;
  _id: string;
}

export interface Cart {
  _id: string;
  user: string;
  products: CartProduct[];
  createdAt: string;
  updatedAt: string;
}

export interface ApiResCart {
  message: string;
  data: Cart;
}
