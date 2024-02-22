import { Router } from "express";
import { createProductController } from "./useCases/createProduct/createProducts.controller";
import { deleteProductController } from "./useCases/deleteProduct/deleteProducts.controller";
import { getAllProductController } from "./useCases/getAllProduct/getAllProducts.controller";
import { getProductController } from "./useCases/getProduct/getProducts.controller";
import { updateProductController } from "./useCases/updateProduct/updateProducts.controller";
import { JWTAuthMiddleware } from "../middlewares/jwtAuthMiddleware";

const ProductRouter = Router();
const jwtAuthMiddleware = new JWTAuthMiddleware();

ProductRouter.post(
  "/",
  jwtAuthMiddleware.jwtAuthenticator,
  createProductController.handle
)
  .get("/", getAllProductController.handle)
  .get("/:productId", getProductController.handle)
  .put(
    "/:productId",
    jwtAuthMiddleware.jwtAuthenticator,
    updateProductController.handle
  )
  .delete(
    "/:productId",
    jwtAuthMiddleware.jwtAuthenticator,
    deleteProductController.handle
  );

export { ProductRouter };
