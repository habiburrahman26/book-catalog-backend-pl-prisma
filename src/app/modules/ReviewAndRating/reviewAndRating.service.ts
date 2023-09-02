import { ReviewAndRating } from '@prisma/client'
import prisma from '../../../shared/prisma'

const addReview = async (payload: ReviewAndRating) => {
  return await prisma.reviewAndRating.create({
    data: payload,
  })
}

export const reviewAndRatingService = {
  addReview,
}
