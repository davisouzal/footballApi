import { Router } from "express";
import accountController from "./account.controller";
import { validateRequestHandler } from "@api/middlewares/validateRequestHandler";
import { LoginSchema, RegisterSchema } from "./account.model";

const accountRoutes = Router();

accountRoutes.post(
  "/login",
  validateRequestHandler({
    body: LoginSchema,
  }),
  accountController.loginUser
);

accountRoutes.post(
  "/register",
  validateRequestHandler({
    body: RegisterSchema,
  }),
  accountController.registerUser
);

export default accountRoutes;
