import express from 'express'
import { CategoryController } from './category.controller'
import validateRequest from '../../middleware/validateRequest'
import { CategoryValidation } from './category.validation'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router.post(
  '/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.create),
  CategoryController.insertIntoDB,
)
router.get('/', CategoryController.getAllCategories)
router.get('/:id', CategoryController.getCategoryById)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.create),
  CategoryController.updateCategoryById,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteCategoryById,
)

export const CategoryRoute = router
