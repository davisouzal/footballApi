import multer, { Options } from "multer";
import path from "path";
import { Request } from "express";

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "uploads"),
    filename: (request: Request, file: Express.Multer.File, callback) => {
      const fileName = `${Date.now()}-${file.originalname}`;
      callback(null, fileName);
    },
  }),
  limits: {
    fileSize: 8 * 1024 * 1024, // 8mb
  },
  fileFilter: (
    request: Request,
    file: Express.Multer.File,
    callback: multer.FileFilterCallback
  ) => {
    const mimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    if (!mimeTypes.includes(file.mimetype)) {
      return callback(new Error("Invalid file type. Only images are allowed."));
    }
    callback(null, true);
  },
} as Options;
