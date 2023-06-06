"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.createProductsWithCategories = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-call */
const faker_1 = require("@faker-js/faker");
const prisma_1 = __importDefault(require("../../src/libs/prisma"));
async function createProductsWithCategories() {
    const categories = await prisma_1.default.$transaction(Array(10)
        .fill(null)
        .map((_, i) => {
        return prisma_1.default.productCategory.create({
            data: {
                category_name: faker_1.faker.commerce.productAdjective(),
            },
        });
    }));
    const products = Array(10)
        .fill(null)
        .map(() => {
        return prisma_1.default.product.create({
            data: {
                name: faker_1.faker.commerce.productName(),
                description: faker_1.faker.commerce.productDescription(),
                product_image: faker_1.faker.image.url(),
                category: {
                    connect: {
                        id: categories[Math.floor(Math.random() * categories.length)].id,
                    },
                },
            },
        });
    });
    return prisma_1.default.$transaction(products);
}
exports.createProductsWithCategories = createProductsWithCategories;
async function createUser() {
    return prisma_1.default.user.create({
        data: {
            email: faker_1.faker.person.fullName() + '@gmail.com',
            password: faker_1.faker.string.uuid(),
        },
    });
}
exports.createUser = createUser;
//# sourceMappingURL=products.js.map