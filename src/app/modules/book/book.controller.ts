import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { bookService } from './book.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import pick from '../../../shared/pick'
import { bookFilterableFields } from './book.constant'

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.insertIntoDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Book created successfully',
    data: result,
  })
})

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder'])
  const filters = pick(req.query, bookFilterableFields)

  const result = await bookService.getAllBooks(options, filters)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  })
})

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.getSingleBook(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  })
})

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.updateBook(req.params.id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  })
})

const deleteBookById = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.deleteBookById(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  })
})

export const BookController = {
  insertIntoDB,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBookById,
}
