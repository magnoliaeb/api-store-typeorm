import { Router } from "express";
import categoryControler from "../controllers/category/category.controller";

const router = Router();

router.get('/category', categoryControler.getCategories)
router.post('/category', categoryControler.createCategory)
router.get('/category/:id', categoryControler.getCategoryById)
router.delete('/category/:id', categoryControler.deleteCategoryById)
router.put('/category/:id', categoryControler.updateCategory)

export default router