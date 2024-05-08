import { ZodError } from "zod";

const zodErrorHandler = (err: ZodError) => {
  const statusCode = 422;
  const errorResponse = {
    message: "Validation error",
    errors: err.errors.map((error) => ({
      field: error.path.join("."),
      message: error.message,
    })),
  };
  return { statusCode, errorResponse };
};

export default zodErrorHandler;
