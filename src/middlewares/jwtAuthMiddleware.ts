import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import HttpRequestError from "../exceptions";
import jwt from "jsonwebtoken";

class JWTAuthMiddleware {
  jwtAuthenticator(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      throw new HttpRequestError(StatusCodes.UNAUTHORIZED, "Unauthorized");
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = this.verifyToken(token);
    req["user"].id = decodedToken.id;
    req["user"].companyId = decodedToken.companyId;
    return next();
  }

  verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return decoded;
    } catch (err) {
      console.log(err);
      throw new HttpRequestError(StatusCodes.UNAUTHORIZED, "Unauthorized");
    }
  }
}

export { JWTAuthMiddleware };
