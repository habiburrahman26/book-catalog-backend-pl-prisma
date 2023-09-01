import { Book, Prisma } from '@prisma/client'
import prisma from '../../../shared/prisma'
import { PaginationOptions } from '../../../interfaces/pagination'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import { BookFilterableFieldsType } from './book.interface'
import { bookSearchableFields } from './book.constant'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'

const insertIntoDB = async (payload: Book) => {
  return await prisma.book.create({
    data: payload,
  })
}

const getAllBooks = async (
  options: PaginationOptions,
  filters: BookFilterableFieldsType,
) => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options)

  const { search, ...filterData } = filters

  const andConditions = []

  if (search) {
    andConditions.push({
      OR: bookSearchableFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    })
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: ['price', 'categoryId'].map(field => ({
        [field]: {
          equals: (filterData as any)[field],
        },
      })),
    })
  }

  console.log(filterData['maxPrice'])

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {}

  const result = await prisma.book.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: {
      [sortBy]: sortOrder,
    },
  })

  const total = await prisma.book.count()

  return {
    meta: {
      page,
      size: 10,
      total,
      totalPage: Math.ceil(total / 10),
    },
    data: result,
  }
}

const getSingleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  })

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, 'Book not found')
  return result
}

const updateBook = async (id: string, payload: Partial<Book>) => {
  await getSingleBook(id)

  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  })
  return result
}

const deleteBookById = async (id: string): Promise<Book | null> => {
  await getSingleBook(id)
  const result = await prisma.book.delete({
    where: {
      id,
    },
  })
  return result
}

export const bookService = {
  insertIntoDB,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBookById,
}
