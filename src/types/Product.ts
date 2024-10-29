import { Category } from "./Category";

export interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  desc: string;
  category: Category;
  stock: number;
  status: boolean;
  images: string[];
}

export interface ApiResProduct {
  message: string;
  data: Product[];
}
