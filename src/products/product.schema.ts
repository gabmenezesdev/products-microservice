import { Schema, model } from "mongoose";
import { IProduct } from "../interfaces/IProduct";
import { Tables } from "../enums/Tables.enum";

const productSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    details: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export default model<IProduct>(Tables.PRODUCTS, productSchema);
