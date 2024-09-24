export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

export interface ApiResUser {
  message: string;
  data: User[];
}
