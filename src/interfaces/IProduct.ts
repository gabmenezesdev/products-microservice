export interface IProduct {
  _id?: string;
  company: string;
  user: string;
  title: string;
  price: number;
  quantity: number;
  category: string;
  description?: string;
  details?: string[];
}
