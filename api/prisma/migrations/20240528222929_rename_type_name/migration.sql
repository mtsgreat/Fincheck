/*
  Warnings:

  - You are about to drop the column `tyoe` on the `bank_accounts` table. All the data in the column will be lost.
  - Added the required column `type` to the `bank_accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bank_accounts" DROP COLUMN "tyoe",
ADD COLUMN     "type" "bank_account_type" NOT NULL;
