import jwt from "jsonwebtoken";
import HttpRequestError from "../exceptions";
import { StatusCodes } from "http-status-codes";
class JWTService {
  generateToken(
    userData: { id: string; clinicId: string },
    expireTime: string
  ): string {
    return jwt.sign(userData, process.env.JWT_SECRET_KEY, {
      expiresIn: expireTime,
    });
  }

  async verifyToken(token: string) {
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
      return decoded;
    } catch (err) {
      console.log(err);
      throw new HttpRequestError(StatusCodes.UNAUTHORIZED, "Unauthorized");
    }
  }
}

export { JWTService };
