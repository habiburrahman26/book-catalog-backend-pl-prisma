import { Category } from '@prisma/client'
import prisma from '../../../shared/prisma'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'

const insertIntoDB = async (payload: Category): Promise<Category> => {
  return await prisma.category.create({
    data: payload,
  })
}

const getAllCategories = async (): Promise<Category[]> => {
  return await prisma.category.findMany()
}

const getCategoryById = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  })

  if (!result) throw new ApiError(httpStatus.BAD_REQUEST, 'Category not found')

  return result
}

const updateCategoryById = async (
  id: string,
  payload: Partial<Category>,
): Promise<Category | null> => {
  await getCategoryById(id)

  const result = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
  })

  return result
}

const deleteCategoryById = async (id: string): Promise<Category | null> => {
  await getCategoryById(id)

  const result = await prisma.category.delete({
    where: {
      id,
    },
  })

  return result
}

export const CategoryService = {
  insertIntoDB,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
}
