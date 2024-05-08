import { Router } from "express";
import usersController from "./users.controller";
import { validateRequestHandler } from "@api/middlewares/validateRequestHandler";
import { idObject } from "@utils/modelsUtils";
import { UserSchema } from "./users.model";

const usersRouter = Router();

usersRouter.get("/users", usersController.getUsers);

usersRouter.get("/users/:id", 
validateRequestHandler({
    params: idObject,
}),
usersController.getUser
);

usersRouter.post("/users",
validateRequestHandler({
    body: UserSchema,
}),
usersController.createUser
);

usersRouter.put("/users/:id",
validateRequestHandler({
    params: idObject,
    body: UserSchema,
}),
usersController.updateUser
);

usersRouter.delete("/users/:id",
validateRequestHandler({
    params: idObject,
}),
usersController.deleteUser
);

export default usersRouter;