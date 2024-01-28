import { IProduct } from "../../interfaces/IProduct";
import { IProductRepository } from "../../interfaces/IProductRepository";

class CreateProduct {
  constructor(private productRepository: IProductRepository) {}

  async execute(createBody: IProduct): Promise<void> {
    await this.productRepository.save(createBody);
  }
}

export { CreateProduct };
