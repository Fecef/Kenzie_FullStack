export interface IComment {
  id: string;
  name: string;
  avatar: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  announcementId: string;
  userId: string;
  user: {
    avatar: string;
    name: string;
  };
}
