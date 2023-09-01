import express from 'express'
import { UserRouter } from '../modules/user/user.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    routes: UserRouter,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.routes))

export const AppRouter = router
