import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authmiddleware.js';
import {
    categoryControlller, createCategoryController,
    deleteCategoryController,
    singleCategoryController,
    updateCategoryController,
} from '../controllers/categoryController.js';

const router = express.Router();

//routes
//create category
router.post(
    "/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController
);
//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
);
export default router;

//getAll category
router.get("/get-category", categoryControlller);

//single category
router.get('/single-category/:slug', singleCategoryController)

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryController
);