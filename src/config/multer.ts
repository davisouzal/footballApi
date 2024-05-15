import multer, { Options } from "multer";
import path from "path";
import fs from "fs";
import { Request } from "express";

const uploadImageConfig = {
  storage: multer.diskStorage({
    destination: (request: Request, file: Express.Multer.File, callback) => {
      const uploadPath = path.join(__dirname, "..", "..", "uploads");
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      callback(null, uploadPath);
    },
    filename: (request: Request, file: Express.Multer.File, callback) => {
      const fileExtension = path.extname(file.originalname);
      const fileName = `${Date.now()}${fileExtension}`;
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
    return callback(null, true);
  },
} as Options;

const uploadFileConfig = {
  storage: multer.diskStorage({
    destination: (request: Request, file: Express.Multer.File, callback) => {
      const uploadPath = path.join(__dirname, "..", "..", "uploads");
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      callback(null, uploadPath);
    },
    filename: (request: Request, file: Express.Multer.File, callback) => {
      const fileExtension = path.extname(file.originalname);
      const fileName = `${Date.now()}${fileExtension}`;
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
    const mimeTypes = ["application/pdf"];
    if (!mimeTypes.includes(file.mimetype)) {
      return callback(new Error("Invalid file type. Only pdfs are allowed."));
    }
    return callback(null, true);
  },
} as Options;

export { uploadImageConfig, uploadFileConfig };