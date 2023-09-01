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

export const bookRoute = router
