import express from 'express'
import { AuthRouter } from '../modules/auth/auth.route'
import { UserRouter } from '../modules/user/user.route'
import { CategoryRoute } from '../modules/category/category.route'

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
]

moduleRoutes.forEach(route => router.use(route.path, route.routes))

export const AppRouter = router
