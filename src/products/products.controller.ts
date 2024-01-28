import { NextFunction, Request, Response } from "express";
import { CreateProductDto } from "./dto/createProduct.dto";
import { CreateProduct } from "./useCases/createProduct";
import { ProductRepository } from "./products.repository";

class ProductController {
  // getOne(req: Request, res: Response, next: NextFunction): Promise<IProduct>{
  // }
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createBody = new CreateProductDto(req.body);
      const productRepository = new ProductRepository();

      const createProduct = new CreateProduct(productRepository);
      createProduct.execute(createBody);
    } catch (error) {
      next(error);
    }
  }
}
const productController = new ProductController();

export { productController };
