import { NextFunction, Request, Response } from "express";
import { CreateProductDto } from "./createProduct.dto";
import { CreateProductUseCase } from "./createProductUseCase";
import { ProductRepository } from "../../products.repository";
import { StatusCodes } from "http-status-codes";
import { IProduct } from "../../../interfaces/IProduct";
import { IRequestWithUser } from "../../../interfaces/IRequestWithUser";

class CreateProductController {
  async handle(
    req: IRequestWithUser,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      console.log("aqui");
      const createBody = new CreateProductDto(req.body);
      console.log(createBody);
      const productRepository = new ProductRepository();
      const product: IProduct = {
        ...createBody,
        user: req.user.id,
        company: req.user.companyId,
      };

      const createProduct = new CreateProductUseCase(productRepository);
      await createProduct.execute(product);

      return res.status(StatusCodes.CREATED).send();
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
const createProductController = new CreateProductController();

export { createProductController };
