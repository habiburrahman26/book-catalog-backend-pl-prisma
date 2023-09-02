import express from 'express'
import { BookController } from './book.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import validateRequest from '../../middleware/validateRequest'
import { BookValidation } from './book.validation'

const router = express.Router()

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.create),
  BookController.insertIntoDB,
)

router.get('/', BookController.getAllBooks)
router.get('/:id', BookController.getSingleBook)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.update),
  BookController.updateBook,
)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.deleteBookById)
router.get('/:categoryId/category', BookController.getBooksByCategoryId)

export const bookRoute = router
