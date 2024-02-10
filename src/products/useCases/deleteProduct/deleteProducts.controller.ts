import { NextFunction, Request, Response } from "express";
import { DeleteProductUseCase } from "./deleteProductUseCase";
import { ProductRepository } from "../../products.repository";
import { StatusCodes } from "http-status-codes";
import { IRequestWithUser } from "../../../interfaces/IRequestWithUser";

class DeleteProductController {
  async handle(
    req: IRequestWithUser,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const productRepository = new ProductRepository();
      const { productId } = req.params;
      const { companyId } = req.user;

      await new DeleteProductUseCase(productRepository).execute(
        productId,
        companyId
      );

      return res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
      next(error);
    }
  }
}
const deleteProductController = new DeleteProductController();

export { deleteProductController };
