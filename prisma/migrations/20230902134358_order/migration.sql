/*
  Warnings:

  - You are about to drop the column `orderdBooks` on the `Order` table. All the data in the column will be lost.
  - Added the required column `orderedBooks` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderdBooks",
ADD COLUMN     "orderedBooks" JSONB NOT NULL;
