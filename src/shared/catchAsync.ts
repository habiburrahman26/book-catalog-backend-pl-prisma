import { NextFunction, Request, RequestHandler, Response } from 'express'

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next)
    try {
    } catch (error) {
      next(error)
    }
  }
}

export default catchAsync
