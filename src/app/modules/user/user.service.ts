import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import prisma from '../../../shared/prisma'
import { User } from '@prisma/client'

const userSelectedFields = {
  id: true,
  name: true,
  email: true,
  role: true,
  contactNo: true,
  address: true,
  profileImg: true,
  createdAt: true,
  updatedAt: true,
}

const getAllUser = async (): Promise<Partial<User>[]> => {
  const result = await prisma.user.findMany({
    select: userSelectedFields,
  })
  return result
}

const getUserById = async (id: string): Promise<Partial<User> | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: userSelectedFields,
  })

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found')
  }

  return result
}

const updateUserById = async (
  id: string,
  payload: User,
): Promise<Partial<User> | null> => {
  const { email, ...data } = payload

  // check if user exists
  await getUserById(id)

  //email address can't be updated
  if (email) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Email address can not be updated',
    )
  }

  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data,
  })

  return result
}

const deleteUserById = async (id: string): Promise<Partial<User> | null> => {
  // check if user exists
  await getUserById(id)

  const result = await prisma.user.delete({
    where: {
      id: id,
    },
    select: userSelectedFields,
  })

  return result
}

export const UserService = {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
}
