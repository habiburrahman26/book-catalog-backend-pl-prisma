import express from 'express'
import { UserController } from './user.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUser)
router.get('/profile', auth(), UserController.getProfile)
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getUserById)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.updateUserById)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteUserById)

export const UserRouter = router
