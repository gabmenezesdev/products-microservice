import { Router } from "express";
import { createProductController } from "./useCases/createProduct/createProducts.controller";

const ProductRouter = Router();

ProductRouter.post("/", createProductController.handle);
// .get('/', memedController.unlinkUserMemed)
// .put('/', memedController.unlinkUserMemed)
// .delete('/', memedController.unlinkUserMemed)
// .post('/', memedController.linkUserMemed);

export { ProductRouter };
