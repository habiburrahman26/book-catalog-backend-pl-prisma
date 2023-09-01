import { NextFunction, Request, Response } from 'express'
import { jwtHelpers } from '../../helpers/JwtHelpers'
import config from '../config'
import { Secret } from 'jsonwebtoken'
import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'

const auth = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(' ')[1]

      if (!token)
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized')

      //check token is valid
      const decoded = jwtHelpers.verifyToken(token, config.jwt.secret as Secret)
      req.user = decoded

      if (roles.length && !roles.includes(decoded.role))
        throw new ApiError(httpStatus.FORBIDDEN, 'FORBIDDEN access')

      next()
    } catch (error) {
      next(error)
    }
  }
}

export default auth
