import express from 'express'
import { AuthRouter } from '../modules/auth/auth.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRouter,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.routes))

export const AppRouter = router
