-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_announcementId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_announcementId_fkey";

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
