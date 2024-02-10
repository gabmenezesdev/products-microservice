import { Router } from "express";
import { createProductController } from "./useCases/createProduct/createProducts.controller";
import { deleteProductController } from "./useCases/deleteProduct/deleteProducts.controller";
import { getAllProductController } from "./useCases/getAllProduct/getAllProducts.controller";
import { getProductController } from "./useCases/getProduct/getProducts.controller";
import { updateProductController } from "./useCases/updateProduct/updateProducts.controller";

const ProductRouter = Router();

ProductRouter.post("/", createProductController.handle)
  .get("/", getAllProductController.handle)
  .get("/:productId", getProductController.handle)
  .put("/:productId", updateProductController.handle)
  .delete("/:productId", deleteProductController.handle);

export { ProductRouter };
