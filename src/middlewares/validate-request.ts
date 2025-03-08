import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../../../common/src/errors/request-validation-error";

export const validateRequest = (
  req: Request,
  ress: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // throw request-validation-error
    return next(new RequestValidationError(errors.array()));
  }
  next();
};
