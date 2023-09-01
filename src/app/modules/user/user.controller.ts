import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service'
import { Request, Response } from 'express'

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUser()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  })
})

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getUserById(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  })
})

const updateUserById = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.updateUserById(req.params.id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users updated successfully',
    data: result,
  })
})

const deleteUserById = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.deleteUserById(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users deleted successfully',
    data: result,
  })
})

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user
  const result = await UserService.getUserById(user?.userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users profile retrieved successfully',
    data: result,
  })
})

export const UserController = {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getProfile,
}
