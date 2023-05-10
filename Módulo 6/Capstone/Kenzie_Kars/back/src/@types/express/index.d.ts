import { Announcement, User } from "@prisma/client";
import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: User;
      annoucement: Announcement;
      authUser: {
        accountType: string;
        id: string;
      };
    }
  }
}
