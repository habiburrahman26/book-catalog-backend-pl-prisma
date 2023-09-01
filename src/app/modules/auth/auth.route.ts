import express from 'express'
import { AuthController } from './auth.controller'
import validateRequest from '../../middleware/validateRequest'
import { UserValidation } from '../user/user.validation'
import { AuthValidation } from './authValidation'

const router = express.Router()

router.post(
  '/signup',
  validateRequest(UserValidation.create),
  AuthController.registration,
)
router.post(
  '/sign-in',
  validateRequest(AuthValidation.login),
  AuthController.login,
)

export const AuthRouter = router
