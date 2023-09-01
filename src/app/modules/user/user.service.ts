import { User } from '@prisma/client'
import prisma from '../../../shared/prisma'
import bcrypt from 'bcrypt'
import config from '../../config'

const insertIntoDB = async (payload: User): Promise<Partial<User>> => {
  const hashPassword = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds),
  )

  payload.password = hashPassword

  const result = await prisma.user.create({
    data: payload,
    select: {
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      createdAt: true,
      updatedAt: true,
      profileImg: true,
    },
  })

  return result
}

export const UserService = {
  insertIntoDB,
}
