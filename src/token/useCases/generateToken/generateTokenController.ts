import { Request, Response, NextFunction } from "express";
import { GenerateTokenUseCase } from "./generateTokenUseCase";
import { StatusCodes } from "http-status-codes";
class GenerateTokenController {
  handle(req: Request, res: Response, next: NextFunction) {
    const generateTokenUseCase = new GenerateTokenUseCase();
    const token = generateTokenUseCase.execute();
    res.status(StatusCodes.CREATED).json({ token });
  }
}
const generateTokenController = new GenerateTokenController();
export { generateTokenController };
