import {
  modifyRoutesPermissions,
  viewRoutesPermissions,
} from "@api/permissions";
import ICustonJwtPayload from "@interfaces/ICustomJwtPayload";
import unauthorizedError from "@utils/exceptions/unauhtorizedError";
import prismaClient from "@utils/prismaUtils";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const { user } = prismaClient;

declare global {
  namespace Express {
    interface Request {
      idUser: string;
      roleUser: string;
    }
  }
}

export default function authenticationHandler() {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        res.status(401);
        const error = new Error("Authorization header is required");
        return next(error);
      }

      const [, token] = authorization.split(" ");

      const payload = verify(
        token,
        process.env.TOKEN_SECRET || "secret"
      ) as ICustonJwtPayload;

      const userFound = await user.findFirst({
        where: {
          id: payload.id,
        },
      });

      if (!userFound) {
        res.status(404);
        const error = new Error("User not found");
        return next(error);
      }

      const route = req.path.split("/")[1];

      const allowedRoles =
        req.method === "GET"
          ? viewRoutesPermissions.get(route)
          : modifyRoutesPermissions.get(route);
      if (!allowedRoles || !allowedRoles.includes(userFound.role)) {
        res.status(403);
        const error = new unauthorizedError();
        return next(error);
      }

      req.idUser = payload.id;
      req.roleUser = userFound.role;
      return next();
    } catch (error) {
      return next(error);
    }
  };
}
