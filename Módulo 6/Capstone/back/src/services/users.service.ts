import { randomUUID } from "node:crypto";
import { prisma } from "../database";
import bcrypt from "bcryptjs";
import { hashSync } from "bcryptjs";
import { Request } from "express";
import { ICreateUserRequest, ICreateUserResponse } from "../interfaces";
import { getUserResponseSchema, createUserResponseSchema } from "../schemas";
import { AppError } from "../errors";
import { Address } from "@prisma/client";
import { resetPasswordTemplate, responseBodyUser, sendEmail } from "../utils";

export const createUserService = async (
  body: ICreateUserRequest
): Promise<ICreateUserResponse> => {
  const { address, password, ...newBody } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      ...newBody,
      password: hashedPassword,
      birthdate: new Date(body.birthdate),
    },
  });

  const newAddress = await prisma.address.create({
    data: {
      ...address,
      userId: newUser.id,
    },
  });

  const user = { ...newUser, address: { ...newAddress } };

  const userValidated = await createUserResponseSchema.validate(user, {
    stripUnknown: true,
    abortEarly: false,
  });

  return userValidated;
};

export const getOneUserService = async (id: string): Promise<any> => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
    select: responseBodyUser,
  });
  if (!user) {
    throw new AppError("User Not Exist");
  }
  return user;
};

export const updateUserService = async (
  req: Request
): Promise<ICreateUserResponse> => {
  const { password, ...data } = req.body;

  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    data.password = hashedPassword;
  }

  const user = await prisma.user.update({
    where: {
      id: req.authUser.id,
    },
    data,
    include: {
      address: true,
      comments: true,
      announcements: true,
    },
  });

  const userValidated = await getUserResponseSchema.validate(user, {
    stripUnknown: true,
    abortEarly: false,
  });

  return userValidated;
};

export const updateUserAddressService = async (
  req: Request
): Promise<Address> => {
  const address = await prisma.address.update({
    where: {
      userId: req.authUser.id,
    },
    data: req.body,
  });

  return address;
};

export const deleteUserService = async (id: string): Promise<void> => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
};

export const sendResetEmailPasswordService = async (
  email: string,
  protocol: string,
  host: string
) => {
  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const resetToken = randomUUID();

  await prisma.user.update({
    where: { email },
    data: { resetToken: resetToken },
  });

  const resetPassword = resetPasswordTemplate(
    email,
    user.name,
    protocol,
    host,
    resetToken
  );

  await sendEmail(resetPassword);
};

export const resetPasswordService = async (
  password: string,
  resetToken: string
) => {
  const user = await prisma.user.findFirst({
    where: { resetToken: resetToken },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: hashSync(password, 10),
      resetToken: null,
    },
  });
};
