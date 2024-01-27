import { NextFunction, Request, Response } from "express";
import { CreateProductDto } from "./dto/createProduct.dto";
import { createProduct } from "./useCases/createProduct";

class ProductController {
  // getOne(req: Request, res: Response, next: NextFunction): Promise<IProduct>{
  // }
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createBody = new CreateProductDto(req.body);
      createProduct.execute();
    } catch (error) {
      next(error);
    }
  }
}
const productController = new ProductController();

export { productController };
