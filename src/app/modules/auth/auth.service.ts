import { User } from '@prisma/client'
import prisma from '../../../shared/prisma'
import bcrypt from 'bcrypt'
import config from '../../config'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'
import { jwtHelpers } from '../../../helpers/JwtHelpers'
import { Secret } from 'jsonwebtoken'
import { Auth } from './auth.type'

const registration = async (payload: User): Promise<Partial<User>> => {
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

const login = async (payload: Auth) => {
  const { email, password } = payload

  //check user is exist or not
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not found')
  }

  //check password is match or not
  const isPasswordMatch = await bcrypt.compare(password, user?.password)

  if (!isPasswordMatch) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Email or Password')
  }

  const token = jwtHelpers.createToken(
    { id: user.id, email: user.email, role: user.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  )

  return { token }
}

export const AuthService = {
  registration,
  login,
}
