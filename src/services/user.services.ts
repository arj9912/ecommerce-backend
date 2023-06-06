/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Boom from '@hapi/boom'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const find = async () => {
    const users = await prisma.user.findMany()
    return users
}

export const findById = async (id: string) => {
    try {
        return await prisma.user.findFirst({
            where: {
                id: Number(id),
            },
        })
    } catch (error: any) {
        throw Boom.notFound('User not found')
    }
}

export const remove = async (id: string) => {
    try {
        return await prisma.user.delete({
            where: {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                id: Number(id),
            },
        })
    } catch (error: any) {
        if (error.code === 'P2025') {
            throw Boom.notFound('User Id not found')
        } else {
            throw error
        }
    }
}

export const update = async (user: any, id: string) => {
    const { email, name, password } = user

    try {
        await prisma.user.update({
            where: { id: Number(id) },
            data: { email, password },
        })
    } catch (error) {
        console.log('error =>', error)
    }
}
