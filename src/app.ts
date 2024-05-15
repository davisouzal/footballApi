import express, { NextFunction, Response, Request, Express } from "express";
import errorHandler from "@middlewares/errorHandlers/generalErrorHandler";
import notFoundHandler from "@middlewares/notFoundHandler";
import routes from "@api/routes";
import accountRoutes from "@api/usecases/account/account.routes";
import authenticationHandler from "@api/middlewares/authenticationHandler";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((request: Request, response: Response, next: NextFunction) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1", accountRoutes);
app.use("/api/v1", authenticationHandler(), ...routes);
app.use("/api/v1/file/view", express.static("uploads"));

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
