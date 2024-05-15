import { Router } from "express";
import multer from "multer";
import { validateRequestHandler } from "@api/middlewares/validateRequestHandler";
import { idObject } from "@utils/modelsUtils";
import { uploadImageConfig } from "@config/multer";
import fileController from "./file.controller";

const uploadImageHandler = multer(uploadImageConfig);
const fileRouter = Router();

fileRouter.put(
  "/file/upload/team-avatar/:id",
  validateRequestHandler({ params: idObject }),
  uploadImageHandler.single("avatar"),
  fileController.uploadTeamAvatar
);

export default fileRouter;
