import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'

const insertIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await UserService.insertIntoDB(req.body)

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

export const UserController = {
  insertIntoDB,
}
