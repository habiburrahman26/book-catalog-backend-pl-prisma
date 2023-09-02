import { Order } from '@prisma/client'
import prisma from '../../../shared/prisma'
import { OrderType } from './order.type'

const addOrder = async (payload: any) => {
  return await prisma.order.create({
    data: payload,
  })
}

const getAllOrders = async () => {
  return await prisma.order.findMany()
}

export const OrderService = {
  addOrder,
  getAllOrders,
}
