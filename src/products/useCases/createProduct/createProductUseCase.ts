import { IProduct } from "../../../interfaces/IProduct";
import { IProductRepository } from "../../../interfaces/IProductRepository";

class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(createBody: IProduct): Promise<void> {
    await this.productRepository.save(createBody);
  }
}

export { CreateProductUseCase };
