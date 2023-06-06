/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
    deleteUser,
    getUserById,
    getUsers,
    updateUser,
} from '../controllers/user.controller'
import { putUser } from '../validators/user.validator'
import { validate } from '../utils/validate'
import {
    authenticateToken,
    isAdmin,
} from '../middlewares/authentication.middleware'

const router = Router()

router.get('/feed', authenticateToken, isAdmin, (req, res) => {
    res.send('Working feed')
})

router.get('/', getUsers)

router.get('/:id', getUserById)

router.delete('/:id', deleteUser)

router.put('/update/:id', validate(putUser), updateUser)

export default router
