import { JWTService } from "../../../services/jwtService";

// created to allow people to test this service individually
class GenerateTokenUseCase {
  execute(): string {
    const jwtService = new JWTService();
    return jwtService.generateToken({ id: "1", companyId: "1" }, "1y");
  }
}

export { GenerateTokenUseCase };
