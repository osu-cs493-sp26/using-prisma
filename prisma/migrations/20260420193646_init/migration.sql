-- CreateTable
CREATE TABLE "Lodging" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "zip" VARCHAR(5) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Lodging_pkey" PRIMARY KEY ("id")
);
