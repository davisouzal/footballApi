import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from "@prisma/client/runtime/library";
import zodErrorHandler from "./zodErrorHandler";
import prismaErrorHandler from "./prismaErrorHandler";
import { MulterError } from "multer";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  let errorResponse = { message: error.message };

  if (error instanceof ZodError) {
    const { statusCode: zodStatusCode, errorResponse: zodErrorResponse } =
      zodErrorHandler(error);
    statusCode = zodStatusCode;
    errorResponse = zodErrorResponse;
  } else if (
    error instanceof PrismaClientKnownRequestError ||
    error instanceof PrismaClientUnknownRequestError ||
    error instanceof PrismaClientInitializationError
  ) {
    const { statusCode: prismaStatusCode, errorResponse: prismaErrorResponse } =
      prismaErrorHandler(error);
    statusCode = prismaStatusCode;
    errorResponse = prismaErrorResponse;
  } else if (error instanceof MulterError) {
    statusCode = 422;
    errorResponse = {
      message: "File upload error",
      errors: [
        {
          field: "file",
          message: error.message,
        },
      ],
    } as { message: string; errors: { field: string; message: string }[] };
  }
  res.status(statusCode).json(errorResponse);
  next();
};

export default errorHandler;
