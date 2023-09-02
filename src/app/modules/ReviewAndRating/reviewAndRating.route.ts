import express from 'express'
import { reviewAndRatingController } from './reviewAndRating.controller'
import auth from '../../middleware/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router.post(
  '/add-review',
  auth(ENUM_USER_ROLE.CUSTOMER),
  reviewAndRatingController.addReview,
)

export const reviewAndRatingRoute = router
