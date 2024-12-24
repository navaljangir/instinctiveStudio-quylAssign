-- AlterTable
CREATE SEQUENCE courses_id_seq;
ALTER TABLE "Courses" ALTER COLUMN "id" SET DEFAULT nextval('courses_id_seq');
ALTER SEQUENCE courses_id_seq OWNED BY "Courses"."id";
