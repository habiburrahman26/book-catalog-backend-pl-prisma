import express from 'express'
import { AuthRouter } from '../modules/auth/auth.route'
import { UserRouter } from '../modules/user/user.route'
import { CategoryRoute } from '../modules/category/category.route'
import { bookRoute } from '../modules/book/book.route'
import { OrderRoute } from '../modules/order/order.route'
import { reviewAndRatingRoute } from '../modules/ReviewAndRating/reviewAndRating.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRouter,
  },
  {
    path: '/users',
    routes: UserRouter,
  },
  {
    path: '/categories',
    routes: CategoryRoute,
  },
  {
    path: '/books',
    routes: bookRoute,
  },
  {
    path: '/orders',
    routes: OrderRoute,
  },
  {
    path: '/reviews',
    routes: reviewAndRatingRoute,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.routes))

export const AppRouter = router
