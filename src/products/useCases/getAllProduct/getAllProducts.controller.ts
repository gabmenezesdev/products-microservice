import { NextFunction, Response } from "express";
import { GetAllProductUseCase } from "./getAllProductUseCase";
import { ProductRepository } from "../../products.repository";
import { StatusCodes } from "http-status-codes";
import { IRequestWithUser } from "../../../interfaces/IRequestWithUser";

class GetAllProductController {
  async handle(
    req: IRequestWithUser,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const productRepository = new ProductRepository();
      const { skip, limit } = req.query as { skip: string; limit: string };

      const foundProducts = await new GetAllProductUseCase(
        productRepository
      ).execute(parseInt(skip), parseInt(limit));

      return res.status(StatusCodes.OK).json(foundProducts);
    } catch (error) {
      next(error);
    }
  }
}
const getAllProductController = new GetAllProductController();

export { getAllProductController };
