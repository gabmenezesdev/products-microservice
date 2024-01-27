import { Router } from 'express';
import { ProductRouter } from './products/products.routes';

const router = Router();

router.use('/products', ProductRouter)

export {router}
