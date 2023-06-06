/*
  Warnings:

  - You are about to drop the column `phone_number` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderLine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductConfiguration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShippingMethod` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShopOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShoppingCart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShoppingCartItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserReview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Variation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VariationOption` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderLine" DROP CONSTRAINT "OrderLine_product_item_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderLine" DROP CONSTRAINT "OrderLine_shop_order_id_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_category_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_parent_category_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductConfiguration" DROP CONSTRAINT "ProductConfiguration_product_item_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductConfiguration" DROP CONSTRAINT "ProductConfiguration_variation_option_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ShopOrder" DROP CONSTRAINT "ShopOrder_order_status_id_fkey";

-- DropForeignKey
ALTER TABLE "ShopOrder" DROP CONSTRAINT "ShopOrder_shipping_address_id_fkey";

-- DropForeignKey
ALTER TABLE "ShopOrder" DROP CONSTRAINT "ShopOrder_shipping_method_id_fkey";

-- DropForeignKey
ALTER TABLE "ShopOrder" DROP CONSTRAINT "ShopOrder_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ShoppingCart" DROP CONSTRAINT "ShoppingCart_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ShoppingCartItem" DROP CONSTRAINT "ShoppingCartItem_product_item_id_fkey";

-- DropForeignKey
ALTER TABLE "ShoppingCartItem" DROP CONSTRAINT "ShoppingCartItem_shopping_cart_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAddress" DROP CONSTRAINT "UserAddress_address_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAddress" DROP CONSTRAINT "UserAddress_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserReview" DROP CONSTRAINT "UserReview_ordered_product_id_fkey";

-- DropForeignKey
ALTER TABLE "UserReview" DROP CONSTRAINT "UserReview_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Variation" DROP CONSTRAINT "Variation_category_id_fkey";

-- DropForeignKey
ALTER TABLE "VariationOption" DROP CONSTRAINT "VariationOption_variation_id_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "phone_number",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "OrderLine";

-- DropTable
DROP TABLE "OrderStatus";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "ProductCategory";

-- DropTable
DROP TABLE "ProductConfiguration";

-- DropTable
DROP TABLE "ProductItem";

-- DropTable
DROP TABLE "ShippingMethod";

-- DropTable
DROP TABLE "ShopOrder";

-- DropTable
DROP TABLE "ShoppingCart";

-- DropTable
DROP TABLE "ShoppingCartItem";

-- DropTable
DROP TABLE "UserAddress";

-- DropTable
DROP TABLE "UserReview";

-- DropTable
DROP TABLE "Variation";

-- DropTable
DROP TABLE "VariationOption";
