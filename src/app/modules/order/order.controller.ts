import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { OrderService } from './order.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const addOrder = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.userId

  const result = await OrderService.addOrder({
    ...req.body,
    userId,
  })

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Order created successfully',
    data: result,
  })
})

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrders()

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Order retrieved successfully',
    data: result,
  })
})

export const OrderController = {
  addOrder,
  getAllOrders
}
