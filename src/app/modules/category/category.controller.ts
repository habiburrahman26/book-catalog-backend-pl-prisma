import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { CategoryService } from './category.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.insertIntoDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category created successfully',
    data: result,
  })
})

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategories()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrieved successfully',
    data: result,
  })
})

const getCategoryById = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getCategoryById(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category retrieved successfully',
    data: result,
  })
})

const updateCategoryById = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.updateCategoryById(
    req.params.id,
    req.body,
  )

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category updated successfully',
    data: result,
  })
})

const deleteCategoryById = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.deleteCategoryById(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category deleted successfully',
    data: result,
  })
})

export const CategoryController = {
  insertIntoDB,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
}
