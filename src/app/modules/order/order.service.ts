import { Order } from '@prisma/client'
import prisma from '../../../shared/prisma'
import { OrderType } from './order.type'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'
import { JwtPayload } from 'jsonwebtoken'
import { ENUM_USER_ROLE } from '../../../enums/user'

const addOrder = async (payload: any) => {
  return await prisma.order.create({
    data: payload,
  })
}

const getAllOrders = async (user: JwtPayload) => {
  const { userId, role } = user

  if (role === ENUM_USER_ROLE.ADMIN) {
    return await prisma.order.findMany()
  }

  const orders = await prisma.order.findMany({
    where: {
      userId,
    },
  })

  return orders
}

const getOrderById = async (orderId: string, user: JwtPayload) => {
  const { userId, role } = user

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  })

  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found')
  }

  if (role === ENUM_USER_ROLE.ADMIN) return order

  if (order.userId !== userId) {
    throw new ApiError(
      httpStatus.FORBIDDEN,
      'You are not authorized to view this order',
    )
  }

  return order
}

export const OrderService = {
  addOrder,
  getAllOrders,
  getOrderById,
}
