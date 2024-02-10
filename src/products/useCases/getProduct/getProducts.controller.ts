import { NextFunction, Response } from "express";
import { ProductRepository } from "../../products.repository";
import { StatusCodes } from "http-status-codes";
import { IRequestWithUser } from "../../../interfaces/IRequestWithUser";
import { GetProductUseCase } from "./getProductUseCase";

class GetProductController {
  async handle(
    req: IRequestWithUser,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const productRepository = new ProductRepository();
      const { productId } = req.params;

      const foundProduct = await new GetProductUseCase(
        productRepository
      ).execute(productId);

      return res.status(StatusCodes.OK).json(foundProduct);
    } catch (error) {
      next(error);
    }
  }
}
const getProductController = new GetProductController();

export { getProductController };
