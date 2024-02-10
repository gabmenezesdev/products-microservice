import { IProduct } from "../interfaces/IProduct";
import { IProductRepository } from "../interfaces/IProductRepository";
import { creationBody, updateBody } from "./productMockData";

class ProductRepositoryMock implements IProductRepository {
  save = jest.fn();
  findAll(skip: number, limit: number): Promise<IProduct[]> {
    return new Promise((resolve) => resolve([creationBody, updateBody]));
  }
  findById(productId: string): Promise<IProduct> {
    return new Promise((resolve) => resolve(creationBody));
  }
  update = jest.fn();

  delete = jest.fn();
}

export { ProductRepositoryMock };
