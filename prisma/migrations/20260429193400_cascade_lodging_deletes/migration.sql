-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_lodgingId_fkey";

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_lodgingId_fkey" FOREIGN KEY ("lodgingId") REFERENCES "Lodging"("id") ON DELETE CASCADE ON UPDATE CASCADE;
