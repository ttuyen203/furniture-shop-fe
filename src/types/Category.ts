export interface Category {
  _id: string;
  name: string;
  slug: string;
  status: boolean;
}

export interface ApiResCate {
  message: string;
  data: Category[];
}
