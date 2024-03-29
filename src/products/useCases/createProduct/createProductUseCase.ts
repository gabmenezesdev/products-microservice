import { IProduct } from "../../../interfaces/IProduct";
import { IProductRepository } from "../../../interfaces/IProductRepository";

class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(createBody: IProduct): Promise<void> {
    console.log("aqui");
    await this.productRepository.save(createBody);
  }
}

export { CreateProductUseCase };
