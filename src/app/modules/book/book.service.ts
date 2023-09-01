import { Book } from '@prisma/client'
import prisma from '../../../shared/prisma'

const insertIntoDB = async (payload: Book) => {
  return await prisma.book.create({
    data: payload,
  })
}
