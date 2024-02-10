import { NextFunction, Request, Response } from "express";
import { UpdateProductDto } from "./updateProduct.dto";
import { UpdateProductUseCase } from "./updateProductUseCase";
import { ProductRepository } from "../../products.repository";
import { StatusCodes } from "http-status-codes";
import { IProduct } from "../../../interfaces/IProduct";
import { IRequestWithUser } from "../../../interfaces/IRequestWithUser";

class UpdateProductController {
  async handle(
    req: IRequestWithUser,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const updateBody = new UpdateProductDto(req.body);
      const productRepository = new ProductRepository();
      const { productId } = req.params;
      const { companyId } = req.user;

      await new UpdateProductUseCase(productRepository).execute(
        productId,
        companyId,
        updateBody
      );

      return res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
      next(error);
    }
  }
}
const updateProductController = new UpdateProductController();

export { updateProductController };
