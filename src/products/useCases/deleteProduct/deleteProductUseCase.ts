import { IProductRepository } from "../../../interfaces/IProductRepository";

class DeleteProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(productId: string, companyId: string): Promise<void> {
    await this.productRepository.delete(productId, companyId);
  }
}

export { DeleteProductUseCase };
