import { IProduct } from "../../../interfaces/IProduct";
import { IProductRepository } from "../../../interfaces/IProductRepository";

class GetProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(productId: string): Promise<IProduct> {
    return this.productRepository.findById(productId);
  }
}

export { GetProductUseCase };
