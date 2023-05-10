import { prisma } from "../database";
import { AppError } from "../errors";

export const createCommentService = async (
  comment: string,
  userId: string,
  announcementId: string
) => {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const announcement = await prisma.announcement.findFirst({
    where: {
      id: announcementId,
    },
  });

  if (!announcement) {
    throw new AppError("Announcement not found", 404);
  }

  const newComment = await prisma.comment.create({
    data: {
      comment: comment,
      userId: userId,
      announcementId: announcementId,
    },
    include: {
      user: { select: { name: true, avatar: true } },
    },
  });

  return newComment;
};

export const deleteCommentService = async (id: string): Promise<void> => {
  await prisma.comment.delete({
    where: {
      id,
    },
  });
};

export const updateCommentService = async (id: string, comment: string) => {
  const commentUpdated = await prisma.comment.update({
    where: {
      id,
    },
    data: { comment },
  });

  return commentUpdated;
};
