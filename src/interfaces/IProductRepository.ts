import { IProduct } from "./IProduct";

export interface IProductRepository {
  save(productBody: IProduct): Promise<void>;
  findAll(skip: number, limit: number): Promise<IProduct[]>;
  findById(productId: string): Promise<IProduct>;
  update(
    productId: string,
    companyId: string,
    updateBody: Partial<IProduct>
  ): Promise<void>;
  delete(productId: string, companyId: string): Promise<void>;
}
