import { Announcement } from "@prisma/client";
import { Request } from "express";

import { prisma } from "../database";
import * as Interfaces from "../interfaces";
import * as Utils from "../utils";

export interface AnnouncementFilter {
  brand?: string;
  model?: string;
  color?: string;
  year?: number;
  fuelType?: string;
  minKm?: string;
  maxKm?: string;
  minPrice?: string;
  maxPrice?: string;
}

export const getAllAnnouncementsService = async (
  filters?: AnnouncementFilter,
  page?: number,
  pageSize?: number
) => {
  const {
    brand,
    model,
    color,
    fuelType,
    year,
    minKm,
    maxKm,
    minPrice,
    maxPrice,
  } = filters;

  const announcements = await prisma.announcement.findMany({
    select: Utils.getAllAnnoucementsOptions,
    where: {
      brand: brand ? { equals: brand } : undefined,
      model: model ? { equals: model } : undefined,
      color: color ? { equals: color } : undefined,
      fuelType: fuelType ? { equals: fuelType } : undefined,
      year: year ? { equals: +year } : undefined,
      mileage: {
        gte: minKm ? +minKm : undefined,
        lte: maxKm ? +maxKm : undefined,
      },
      price: {
        gte: minPrice ? +minPrice : undefined,
        lte: maxPrice ? +maxPrice : undefined,
      },
    },
    skip: page && pageSize ? (page - 1) * pageSize : undefined,
    take: pageSize ? pageSize : undefined,
    orderBy: {
      createdAt: "asc",
    },
  });

  return announcements;
};

export const createAnnouncementService = async (req: Request) => {
  const { images, ...newBody } = req.body;
  if (newBody.price <= newBody.priceFipe) {
    newBody.isGoodBuy = true;
  }
  const newAnnouncement = await prisma.announcement.create({
    data: { ...newBody, userId: req.authUser.id },
    include: {
      images: true,
      comments: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          cpf: true,
          accountType: true,
          birthdate: true,
          description: true,
          avatar: true,
          phone: true,
          createdAt: true,
          updatedAt: true,
          address: true,
        },
      },
    },
  });

  const imageList = await Promise.all(
    images.map(async (imageUrl: string) => {
      return await prisma.image.create({
        data: {
          imgUrl: imageUrl,
          announcementId: newAnnouncement.id,
        },
      });
    })
  );

  return { ...newAnnouncement, images: imageList };
};

export const getOneAnnouncementService = async (
  id: string
): Promise<Announcement> => {
  return await prisma.announcement.findFirst({
    where: {
      id,
    },
    include: {
      images: true,
      comments: {
        include: {
          user: {
            select: {
              avatar: true,
              name: true,
            },
          },
        },
      },
      user: {
        select: Utils.responseBodyUser,
      },
    },
  });
};

export const updateAnnouncementService = async (
  id: string,
  body: Interfaces.IUpdateAnnoucementRequest
): Promise<Announcement> => {
  return await prisma.announcement.update({
    where: {
      id,
    },
    data: body,
  });
};

export const deleteAnnouncementService = async (
  id: string
): Promise<Announcement> => {
  return await prisma.announcement.delete({
    where: {
      id,
    },
  });
};
