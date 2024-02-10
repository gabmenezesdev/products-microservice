import { IProduct } from "../../../interfaces/IProduct";
import { IProductRepository } from "../../../interfaces/IProductRepository";

class UpdateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(
    productId: string,
    companyId: string,
    updateBody: Partial<IProduct>
  ): Promise<void> {
    await this.productRepository.update(productId, companyId, updateBody);
  }
}

export { UpdateProductUseCase };
