import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import HttpRequestError from "../exceptions";
import { JWTService } from "../services/jwtService";

class JWTAuthMiddleware {
  async jwtAuthenticator(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const authHeader = req.headers["authorization"];
      if (!authHeader) {
        throw new HttpRequestError(StatusCodes.UNAUTHORIZED, "Unauthorized");
      }
      const jwtService = new JWTService();

      const token = authHeader.split(" ")[1];
      const decodedToken = await jwtService.verifyToken(token);

      req["user"] = decodedToken;

      return next();
    } catch (error) {
      throw new HttpRequestError(StatusCodes.UNAUTHORIZED, "Unauthorized");
    }
  }
}

export { JWTAuthMiddleware };
