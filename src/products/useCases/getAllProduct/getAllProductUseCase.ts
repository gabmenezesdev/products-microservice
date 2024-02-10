import { IProduct } from "../../../interfaces/IProduct";
import { IProductRepository } from "../../../interfaces/IProductRepository";

class GetAllProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(skip: number, limit: number): Promise<IProduct[]> {
    return this.productRepository.findAll(skip, limit);
  }
}

export { GetAllProductUseCase };
