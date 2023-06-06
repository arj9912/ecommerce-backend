/* eslint-disable @typescript-eslint/no-unsafe-call */
import { NextFunction, Response } from 'express'
import { RequestWithUserObject } from '../types'
import HttpStatusCode from 'http-status-codes'

import * as ProfileService from '../services/profile.services'

export const getProfile = async (
    req: RequestWithUserObject,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const data = await ProfileService.get(req.user.userId)
        res.send(data)
    } catch (error) {
        next(error)
    }
}

export const updateProfile = async (
    req: RequestWithUserObject,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await ProfileService.update(req.user.userId, req.body)
        res.status(HttpStatusCode.CREATED).json(user)
    } catch (error) {
        next(error)
    }
}
