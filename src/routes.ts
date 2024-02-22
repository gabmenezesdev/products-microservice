import { Router } from "express";
import { ProductRouter } from "./products/products.routes";
import { JwtRouter } from "./token/routes";

const router = Router();
router.use("/v1/products", ProductRouter);
router.use("/v1/tokens", JwtRouter);

export { router };
