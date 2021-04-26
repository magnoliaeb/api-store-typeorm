import { Router } from "express";
import { ProductController } from "../controllers/product/product.controller";
const productController = new ProductController();
const router = Router();

router.get('/product', productController.getProducts)
router.post('/product', productController.createProduct)
// router.get('/product/:id', categoryControler.getCategoryById)
// router.delete('/product/:id', categoryControler.deleteCategoryById)
// router.put('/product/:id', categoryControler.updateCategory)

export default router