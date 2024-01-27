import { Router } from "express";
import { productController } from "./products.controller";

const ProductRouter = Router();

ProductRouter.post("/", productController.create);
// .get('/', memedController.unlinkUserMemed)
// .put('/', memedController.unlinkUserMemed)
// .delete('/', memedController.unlinkUserMemed)
// .post('/', memedController.linkUserMemed);

export { ProductRouter };
