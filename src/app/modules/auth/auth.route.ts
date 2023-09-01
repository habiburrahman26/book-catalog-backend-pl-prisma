import express from 'express'
import { AuthController } from './auth.controller'

const router = express.Router()

router.post('/signup', AuthController.registration)
router.post('/sign-in', AuthController.login)

export const AuthRouter = router
