import { Router } from "express";
import { generateTokenController } from "./useCases/generateToken/generateTokenController";

const JwtRouter = Router();

JwtRouter.get("/", generateTokenController.handle);
export { JwtRouter };
