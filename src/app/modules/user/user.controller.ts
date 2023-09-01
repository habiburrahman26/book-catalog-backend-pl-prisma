import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service'

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserService.getAllUser()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  })
})

const getUserById = catchAsync(async (req, res) => {
  const result = await UserService.getUserById(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  })
})

export const UserController = {
  getAllUser,
  getUserById,
}
