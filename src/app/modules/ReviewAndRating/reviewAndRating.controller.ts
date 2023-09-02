import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { reviewAndRatingService } from './reviewAndRating.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const addReview = catchAsync(async (req: Request, res: Response) => {
  const result = await reviewAndRatingService.addReview({
    ...req.body,
    userId: req.user?.userId,
  })

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Review added successfully',
    data: result,
  })
})

const updateReview = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.userId

  const result = await reviewAndRatingService.updateReview(
    req.params.reviewId,
    userId,
    req.body,
  )

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Review updated successfully',
    data: result,
  })
})

export const reviewAndRatingController = {
  addReview,
  updateReview
}
