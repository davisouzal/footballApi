import { Router } from "express";
import playersController from "./players.controller";
import { validateRequestHandler } from "../../middlewares/validateRequestHandler";
import { idObject } from "../../../utils/modelsUtils";
import { PlayerSchema } from "./players.model";

const playersRouter = Router();

playersRouter.get("/players", playersController.getPlayers);

playersRouter.get(
  "/players/:id",
  validateRequestHandler({
    params: idObject,
  }),
  playersController.getPlayer
);

playersRouter.post(
  "/players",
  validateRequestHandler({
    body: PlayerSchema,
  }),
  playersController.createPlayer
);

playersRouter.put(
  "/players/:id",
  validateRequestHandler({
    params: idObject,
    body: PlayerSchema,
  }),
  playersController.updatePlayer
);

playersRouter.delete(
  "/players/:id",
  validateRequestHandler({
    params: idObject,
  }),
  playersController.deletePlayer
);

export default playersRouter;
