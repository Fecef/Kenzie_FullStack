import { IAnnouncementRegister } from "../interfaces/announcement.interface";

export function announcementDataNormalizer(data: IAnnouncementRegister) {
  const announcement: IAnnouncementRegister = { ...data, images: [] };
  const images = ["image1", "image2", "image3", "image4", "image5", "image6"];

  images.forEach((image) => {
    if (!announcement[image]) return;

    announcement.images.push(announcement[image]);

    delete announcement[image];
  });

  return announcement;
}
