import { Request, Response, NextFunction } from "express";
import path from "path";
import fileService from "./file.service";
import teamsService from "@api/entities/teams/teams.service";
import objectNotFoundError from "@utils/exceptions/objectNotFoundError";
import deleteFile from "@utils/files/deleteFile";

const uploadTeamAvatar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      return next(new Error("No file uploaded"));
    }

    const possibleTeam = await teamsService.findOne(req.params.id);
    if (!possibleTeam) {
      return next(new objectNotFoundError("Team", req.params.id));
    }

    const fileName = path.basename(req.file.path);
    await fileService.uploadTeamAvatar(fileName, req.params.id);

    if (possibleTeam.avatar !== req.file.originalname) {
      deleteFile(`${__dirname}/../../../../uploads/${possibleTeam.avatar}`);
    }

    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    next(error);
  }
};

const fileController = {
  uploadTeamAvatar,
};

export default fileController;
