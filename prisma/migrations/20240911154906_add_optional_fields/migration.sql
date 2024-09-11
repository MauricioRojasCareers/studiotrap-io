/*
  Warnings:

  - You are about to drop the column `created_at` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Listing` table. All the data in the column will be lost.
  - Added the required column `pricePerHour` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_user_id_fkey";

-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "created_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pricePerHour" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "userId" TEXT,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
