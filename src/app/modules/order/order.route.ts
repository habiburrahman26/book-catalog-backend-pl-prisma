import express from 'express'
import { OrderController } from './order.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.addOrder,
)

router.get('/', auth(ENUM_USER_ROLE.ADMIN), OrderController.getAllOrders)
router.get(
  '/specific-orders',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.getOrderForSpecificUser,
)

export const OrderRoute = router
