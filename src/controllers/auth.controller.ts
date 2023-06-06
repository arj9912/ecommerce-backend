import { Request, Response, NextFunction } from 'express'
import * as UserService from '../services/auth.services'

export const addUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await UserService.create(req.body)
        res.send(data)
    } catch (error) {
        next(error)
    }
}
