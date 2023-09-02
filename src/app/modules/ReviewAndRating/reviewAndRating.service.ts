import { ReviewAndRating } from '@prisma/client'
import prisma from '../../../shared/prisma'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'

const addReview = async (payload: ReviewAndRating) => {
  return await prisma.reviewAndRating.create({
    data: payload,
  })
}

const updateReview = async (
  reviewId: string,
  userId: string,
  payload: Partial<ReviewAndRating>,
) => {
  const review = await prisma.reviewAndRating.findUnique({
    where: {
      id: reviewId,
    },
  })

  if (!review) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found')
  }

  if (review.userId !== userId) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'You are not authorized to update this review',
    )
  }

  return await prisma.reviewAndRating.update({
    where: {
      id: reviewId,
    },
    data: payload,
  })
}

export const reviewAndRatingService = {
  addReview,
  updateReview
}
