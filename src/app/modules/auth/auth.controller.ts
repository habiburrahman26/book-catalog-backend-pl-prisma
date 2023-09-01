import { NextFunction, Request, Response } from 'express'
import { AuthService } from './auth.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'

const registration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.registration(req.body)

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body)

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'User loggedIn successfully',
    data: result,
  })
})

export const AuthController = {
  registration,
  login,
}
