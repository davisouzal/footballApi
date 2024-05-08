import { User } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import usersService from "./users.service";
import { IdType } from "@utils/modelsUtils";
import objectNotFoundError from "@utils/exceptions/objectNotFoundError";
import { IDeleteResponse } from "@interfaces/IDeleteResponse";

const getUsers = async (
    req: Request,
    res: Response<User[]>,
    next: NextFunction
    ) => {
    try {
       const users = await usersService.findAll();
         res.status(200).send(users);
    } catch (error) {
        next(error);
    }
}

const getUser = async (
    req: Request<IdType>,
    res: Response<User>,
    next: NextFunction
    ) => {
    try {
        const user = await usersService.findOne(req.params.id);
        if (!user) {
            res.status(404);
            const error = new objectNotFoundError("User", req.params.id);
            next(error);
        }
        res.status(200).send(user as User);
    } catch (error) {
        next(error);
    }
}

const createUser = async (
    req: Request,
    res: Response<User>,
    next: NextFunction
) => {
    try {
        const createResult = await usersService.createOne(req.body);
        res.status(201).send(createResult);
    } catch (error) {
        next(error);
    }
};

const updateUser = async (
    req: Request<IdType>,
    res: Response<User>,
    next: NextFunction
) => {
    try {
        const updateResult = await usersService.updateOne(
            req.params.id,
            req.body
        );
        res.status(200).send(updateResult);
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (
    req: Request<IdType>,
    res: Response<IDeleteResponse<User>>,
    next: NextFunction
) => {
    try {
        const deleteResult = await usersService.deleteOne(req.params.id);
        res.status(200).send(deleteResult);
    } catch (error) {
        next(error);
    }
};

const usersController = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};

export default usersController;