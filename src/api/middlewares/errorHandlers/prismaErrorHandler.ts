import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from "@prisma/client/runtime/library";

const prismaErrorHandler = (
  err:
    | PrismaClientKnownRequestError
    | PrismaClientUnknownRequestError
    | PrismaClientInitializationError
) => {
  console.error(err);
  const statusCode = 500;
  const errorResponse = {
    message: "Database error",
    responseError: err.name,
  };
  return { statusCode, errorResponse };
};

export default prismaErrorHandler;
