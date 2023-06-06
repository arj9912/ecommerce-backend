/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { scryptSync } from 'crypto'
import prisma from '../libs/prisma'
import * as jwt from 'jsonwebtoken'

const getHash = (password: string) =>
    scryptSync(password, '', 32).toString('hex')

const comparePassword = (password: string, hashedPassword: string): boolean => {
    const inputHash = getHash(password)
    return inputHash === hashedPassword
}

export const create = async (users: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { email, password } = users
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const hashedPassword = getHash(password) // Hash the password using the getHash function

    const user = await prisma.user.create({
        data: {
            id: Math.ceil(Math.random() * 100),
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            email,

            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            password: hashedPassword,
        },
        select: {
            email: true,
            addresses: true,
            phone_number: true,
            id: true,
        },
    })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return

    const userData = {
        ...user,
        password: undefined,
    }

    return userData
}

export async function login(email: string, password: string) {
    const user = await prisma.user.findFirstOrThrow({ where: { email } })

    // Compare the provided password with the stored hashed password
    const passwordMatch = comparePassword(password, user.password)

    if (!passwordMatch) {
        // Password does not match
        // If you want to throw a http error, you can. This is throw internal server error
        throw Error('Password not correct')
    }

    // Generate a token

    const token = jwt.sign(
        { userId: user.id, isAdmin: true },
        'random-secret',
        {
            expiresIn: '1h',
        }
    )

    // Return the token to the client
    return { success: true, token }
}
