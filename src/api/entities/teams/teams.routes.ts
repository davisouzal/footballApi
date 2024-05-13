import { Router } from "express";
import { validateRequestHandler } from "@api/middlewares/validateRequestHandler";
import { idObject } from "@utils/modelsUtils";
import uploadsConfig from "@config/multer";
import teamsController from "./teams.controller";
import { TeamSchema } from "./teams.model";
import multer from "multer";

const uploadsHandler = multer(uploadsConfig);
const teamsRouter = Router();

teamsRouter.get("/teams", teamsController.getTeams);

teamsRouter.get("/teams/:id",
validateRequestHandler({
    params: idObject,
}),
teamsController.getTeam
);

teamsRouter.post("/teams",
uploadsHandler.single("avatar"),
teamsController.createTeam
);

teamsRouter.put("/teams/:id",
uploadsHandler.single("avatar"),
teamsController.updateTeam
);

teamsRouter.delete("/teams/:id",
validateRequestHandler({
    params: idObject,
}),
teamsController.deleteTeam
);

export default teamsRouter;