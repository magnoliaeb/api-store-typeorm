import { getCategories } from './getCategories';
import { getCategoryById } from './getCategoryById';
import { createCategory } from './createCategory';
import { deleteCategoryById } from './deleteCategoryById';
import { updateCategory } from './updateCategory';

const categoryController =  {
    getCategories,
    getCategoryById,
    createCategory,
    deleteCategoryById,
    updateCategory

}


export default categoryController