import { IProduct } from "../interfaces/IProduct";

const creationBody: IProduct = {
  title: "Refrigerator",
  price: 2000,
  category: "home",
  quantity: 5,
  description: "Consul Refrigerator 400 L",
  details: ["Color: White", "Condition: New"],
  user: "1",
  company: "1",
};

const updateBody: IProduct = {
  title: "Video-Game",
  price: 1000,
  category: "toys_games",
  quantity: 5,
  description: "new description",
  details: ["Color: Black", "Condition: Used"],
  user: "2",
  company: "2",
};

const testToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJjbGluaWNJZCI6IjEiLCJpYXQiOjE3MDg1Njc4MTAsImV4cCI6MTc0MDEyNTQxMH0.MxsJkVfwTsksVWA3CCkLuukBYxtFBlNg2anJBOyMwsc";
export { creationBody, updateBody, testToken };
