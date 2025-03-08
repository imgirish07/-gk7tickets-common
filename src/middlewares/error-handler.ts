import { Request, Response, NextFunction } from "express";
import { CustomError } from "../../../common/src/errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.set("Content-Type", "application/json");

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  res.status(400).json({
    errors: [{ message: "something went wrong" }],
  });
};
