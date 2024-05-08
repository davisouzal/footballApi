import { Router } from "express";
import teamsController from "./teams.controller";
import { validateRequestHandler } from "@api/middlewares/validateRequestHandler";
import { idObject } from "@utils/modelsUtils";
import { TeamSchema } from "./teams.model";

const teamsRouter = Router();

teamsRouter.get("/teams", teamsController.getTeams);

teamsRouter.get("/teams/:id",
validateRequestHandler({
    params: idObject,
}),
teamsController.getTeam
);

teamsRouter.post("/teams",
validateRequestHandler({
    body: TeamSchema,
}),
teamsController.createTeam
);

teamsRouter.put("/teams/:id",
validateRequestHandler({
    params: idObject,
    body: TeamSchema,
}),
teamsController.updateTeam
);

teamsRouter.delete("/teams/:id",
validateRequestHandler({
    params: idObject,
}),
teamsController.deleteTeam
);

export default teamsRouter;