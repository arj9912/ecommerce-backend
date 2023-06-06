/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextFunction, Router, Response, Request } from 'express'
import { validate } from '../utils/validate'
import { createPostDtop } from '../validators/user.validator'
import { addUsers } from '../controllers/auth.controller'
import { login } from '../services/auth.services'

const router = Router()

router.post(
    '/login',
    async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const { email, password }: { email: string; password: string } =
                req.body
            const { token } = await login(email, password)
            res.cookie('refrest_token', token)
            res.json(token)
        } catch (error) {
            next(error)
        }
    }
)

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
router.post('/signup', validate(createPostDtop), addUsers)

router.get('/logout', (req: Request, res: Response) => {
    res.clearCookie('refrest_token')
    res.send('Cleared Cookie')
})

export default router
