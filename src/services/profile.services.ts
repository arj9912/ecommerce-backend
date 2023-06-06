// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import prisma from '../libs/prisma'

// export const get = async (id: number) => {
//     return await prisma.user.findFirst({
//         where: { id },
//         select: {
//             id: true,
//             email: true,
//             addresses: true,
//             phone_number: true,
//         },
//     })
// }

// export const update = async (id: number, user: string) => {
//     const { email, password, addresses, phone_number } = user

//     try {
//         return await prisma.user.update({
//             where: {
//                 id,
//             },
//             data: {
//                 email,
//                 password,
//                 addresses,
//                 phone_number,
//             },
//             select: {
//                 email: true,
//                 addresses: true,
//                 phone_number: true,
//             },
//         })
//     } catch (error) {
//         throw Error('Updation Failed')
//     }
// }
