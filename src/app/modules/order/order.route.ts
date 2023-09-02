import express from 'express'
import { OrderController } from './order.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import validateRequest from '../../middleware/validateRequest'
import { OrderValidation } from './order.validation'

const router = express.Router()

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(OrderValidation.create),
  OrderController.addOrder,
)

router.get('/', auth(ENUM_USER_ROLE.ADMIN), OrderController.getAllOrders)
router.get(
  '/specific-orders',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.getOrderForSpecificUser,
)

router.get(
  '/:orderId',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  OrderController.getOrderById,
)

export const OrderRoute = router
