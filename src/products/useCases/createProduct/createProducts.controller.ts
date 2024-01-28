import { NextFunction, Request, Response } from "express";
import { CreateProductDto } from "./createProduct.dto";
import { CreateProduct } from "./createProduct";
import { ProductRepository } from "../../products.repository";
import { StatusCodes } from "http-status-codes";

class CreateProductController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const createBody = new CreateProductDto(req.body);
      const productRepository = new ProductRepository();

      const createProduct = new CreateProduct(productRepository);
      await createProduct.execute(createBody);

      return res.status(StatusCodes.CREATED).send();
    } catch (error) {
      next(error);
    }
  }
}
const createProductController = new CreateProductController();

export { createProductController };
