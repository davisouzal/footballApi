import { Request, Response, NextFunction } from "express";
import { PlayerSchema } from "./players.model";
import { Player } from "@prisma/client";
import { IdType } from "../../../utils/modelsUtils";
import playersService from "./players.service";
import objectNotFoundError from "../../../utils/exceptions/objectNotFoundError";
import { IDeleteResponse } from "@interfaces/IDeleteResponse";

const getPlayers = async (
  req: Request,
  res: Response<Player[]>,
  next: NextFunction
) => {
  try {
    const players = await playersService.findAll();
    res.status(200).send(players);
  } catch (error) {
    next(error);
  }
};

const getPlayer = async (
  req: Request<IdType>,
  res: Response<Player>,
  next: NextFunction
) => {
  try {
    const player = await playersService.findOne(req.params.id);
    if (!player) {
      res.status(404);
      const error = new objectNotFoundError("Player", req.params.id);
      next(error);
    }
    res.status(200).send(player as Player);
  } catch (error) {
    next(error);
  }
};

const createPlayer = async (
  req: Request,
  res: Response<Player>,
  next: NextFunction
) => {
  try {
    const createResult = await playersService.createOne(req.body);
    res.status(201).send(createResult);
  } catch (error) {
    next(error);
  }
};

const updatePlayer = async (
  req: Request<IdType>,
  res: Response<Player>,
  next: NextFunction
) => {
  try {
    const updateResult = await playersService.updateOne(
      req.params.id,
      req.body
    );
    res.status(200).send(updateResult);
  } catch (error) {
    next(error);
  }
};

const deletePlayer = async (
  req: Request<IdType>,
  res: Response<IDeleteResponse<Player>>,
  next: NextFunction
) => {
  try {
    const deleteResult = await playersService.deleteOne(req.params.id);
    res.status(200).send(deleteResult);
  } catch (error) {
    next(error);
  }
};

const playersController = {
  getPlayers,
  getPlayer,
  createPlayer,
  updatePlayer,
  deletePlayer,
};

export default playersController;
