import { Team } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import teamsService from "./teams.service";
import { IdType } from "@utils/modelsUtils";
import objectNotFoundError from "@utils/exceptions/objectNotFoundError";
import { IDeleteResponse } from "@interfaces/IDeleteResponse";

const getTeams = async (
    req: Request,
    res: Response<Team[]>,
    next: NextFunction
    ) => {
    try {
        const teams = await teamsService.findAll();
        res.status(200).send(teams);
    } catch (error) {
        next(error);
    }
};

const getTeam = async (
    req: Request<IdType>,
    res: Response<Team>,
    next: NextFunction
    ) => {
    try {
        const team = await teamsService.findOne(req.params.id);
        if (!team) {
            res.status(404);
            const error = new objectNotFoundError("Team", req.params.id);
            next(error);
        }
        res.status(200).send(team as Team);
    } catch (error) {
        next(error);
    }
}

const createTeam = async (
    req: Request,
    res: Response<Team>,
    next: NextFunction
) => {
    try {        
        const teamData = { 
            ...req.body.name,
            avatar: "avatar"
        };

        const createResult = await teamsService.createOne(teamData);
        res.status(201).send(createResult);
    } catch (error) {
        next(error);
    }
};

const updateTeam = async (
    req: Request<IdType>,
    res: Response<Team>,
    next: NextFunction
) => {
    try {
        const updateResult = await teamsService.updateOne(
            req.params.id,
            req.body
        );
        res.status(200).send(updateResult);
    } catch (error) {
        next(error);
    }
};

const deleteTeam = async (
    req: Request<IdType>,
    res: Response<IDeleteResponse<Team>>,
    next: NextFunction
) => {
    try {
        const deleteResult = await teamsService.deleteOne(req.params.id);
        res.status(200).send(deleteResult);
    } catch (error) {
        next(error);
    }
};

const teamsController = {
    getTeams,
    getTeam,
    createTeam,
    updateTeam,
    deleteTeam,
};

export default teamsController;