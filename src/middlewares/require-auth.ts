import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../../../common/src/errors/not-authorized-error";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    return next(new NotAuthorizedError());
  }
  next();
};
