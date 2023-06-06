import { Router } from 'express'
import { authenticateToken } from '../middlewares/authentication.middleware'

const router = Router()

router.get('/', authenticateToken)

export default router
