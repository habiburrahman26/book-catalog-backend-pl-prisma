import express from 'express'
import { UserController } from './user.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import validateRequest from '../../middleware/validateRequest'
import { UserValidation } from './user.validation'

const router = express.Router()

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUser)
router.get('/profile', auth(), UserController.getProfile)
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getUserById)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(UserValidation.update),
  UserController.updateUserById,
)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteUserById)

export const UserRouter = router
