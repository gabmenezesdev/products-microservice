import { IProduct } from "../interfaces/IProduct";
import { IProductRepository } from "../interfaces/IProductRepository";
import productSchema from "./product.schema";
class ProductRepository implements IProductRepository {
  async save(productBody: IProduct): Promise<void> {
    await productSchema.create(productBody);
  }
  async findAll(skip: number, limit: number): Promise<IProduct[]> {
    return productSchema.find().skip(skip).limit(limit);
  }
  async findById(productId: string): Promise<IProduct> {
    return productSchema.findById(productId);
  }
  async update(
    productId: string,
    updateBody: Partial<IProduct>
  ): Promise<void> {
    await productSchema.updateOne({ _id: productId }, updateBody);
  }
  async delete(productId: string): Promise<void> {
    await productSchema.deleteOne({ _id: productId });
  }
}
export { ProductRepository };
