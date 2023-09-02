import { ReviewAndRating } from '@prisma/client'
import prisma from '../../../shared/prisma'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'

const reviewSelectData = {
  id: true,
  review: true,
  rating: true,
  createdAt: true,
  updatedAt: true,
  userId: true,
  user: {
    select: {
      name: true,
      email: true,
      profileImg: true,
    },
  },
}

const addReview = async (payload: ReviewAndRating) => {
  return await prisma.reviewAndRating.create({
    data: payload,
    select: reviewSelectData,
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
    select: reviewSelectData,
  })
}

const getReviewsByBookId = async (bookId: string) => {
  const result = await prisma.reviewAndRating.findMany({
    where: {
      bookId,
    },
    select: reviewSelectData,
  })

  return result
}

const deleteReviewById = async (reviewId: string, userId: string) => {
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
      'You are not authorized to delete this review',
    )
  }

  return await prisma.reviewAndRating.delete({
    where: {
      id: reviewId,
    },
    select: reviewSelectData,
  })
}

export const reviewAndRatingService = {
  addReview,
  updateReview,
  getReviewsByBookId,
  deleteReviewById,
}
