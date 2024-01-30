import { Router } from "express";
import { ProductRouter } from "./products/products.routes";

const router = Router();
router.use("/v1/products", ProductRouter);

export { router };
