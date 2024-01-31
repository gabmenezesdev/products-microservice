import { IProduct } from "../../../../interfaces/IProduct";
import { IProductRepository } from "../../../../interfaces/IProductRepository";

class ProductRepositoryMock implements IProductRepository {
  save = jest.fn();
  findAll(skip: number, limit: number): Promise<IProduct[]> {
    throw new Error("Method not implemented.");
  }
  findById(productId: string): Promise<IProduct> {
    throw new Error("Method not implemented.");
  }
  update(productId: string, updateBody: Partial<IProduct>): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(productId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { ProductRepositoryMock };
