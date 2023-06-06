/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import userRouter from '../routes/user.routes'
import authRouter from '../routes/auth.routes'
import profileRouter from '../routes/profile.routes'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
router.use('/', authRouter)

router.use('/users', userRouter)

router.use('/profile/me', profileRouter)

export default router
