import { MulterError } from "multer";

const multerErrorHandler = (err: MulterError) => {
  let statusCode;
  let errorMessage;

  switch (err.code) {
    case "LIMIT_PART_COUNT":
      statusCode = 400;
      errorMessage = "Too many parts";
      break;
    case "LIMIT_FILE_SIZE":
      statusCode = 400;
      errorMessage = "File too large";
      break;
    case "LIMIT_FILE_COUNT":
      statusCode = 400;
      errorMessage = "Too many files";
      break;
    case "LIMIT_FIELD_KEY":
      statusCode = 400;
      errorMessage = "Field name too long";
      break;
    case "LIMIT_FIELD_VALUE":
      statusCode = 400;
      errorMessage = "Field value too long";
      break;
    case "LIMIT_FIELD_COUNT":
      statusCode = 400;
      errorMessage = "Too many fields";
      break;
    case "LIMIT_UNEXPECTED_FILE":
      statusCode = 400;
      errorMessage = "Unexpected file";
      break;
    default:
      statusCode = 500;
      errorMessage = "Multer error";
      break;
  }

  const errorResponse = {
    message: errorMessage,
    responseError: err.code,
  };

  return { statusCode, errorResponse };
};

export default multerErrorHandler;
