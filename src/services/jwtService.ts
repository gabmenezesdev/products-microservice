import jwt from "jsonwebtoken";
class JWTService {
  generateToken(
    userData: { id: string; clinicId: string },
    expireTime: string
  ): string {
    return jwt.sign(userData, process.env.JWT_SECRET_KEY, {
      expiresIn: expireTime,
    });
  }
}

export { JWTService };
