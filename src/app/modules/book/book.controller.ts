import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { bookService } from './book.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.insertIntoDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Book created successfully',
    data: result,
  })
})

export const BookController = {
  insertIntoDB,
}
