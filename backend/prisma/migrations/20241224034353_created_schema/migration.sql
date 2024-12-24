-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Green', 'Red');

-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "StudentName" TEXT NOT NULL,
    "Cohort" TEXT NOT NULL,
    "currClass" TEXT NOT NULL,
    "DateJoined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "LastLogin" TIMESTAMP(3) NOT NULL,
    "Status" "Status" NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id" INTEGER NOT NULL,
    "CourseName" TEXT NOT NULL,
    "StudentId" INTEGER NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_StudentId_fkey" FOREIGN KEY ("StudentId") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
