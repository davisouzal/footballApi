import { Request, Response, NextFunction } from "express";
import { PlayerObject, PlayerWithIdObject } from "./players.model";
import { Player } from "@prisma/client";
import idObject from "../../utils/modelsUtils";
import playersService from "./players.service";
import objectNotFoundError from "../../utils/exceptions/objectNotFoundError";

const getPlayers = async (req: Request, res: Response<Player[]>, next: NextFunction) => {
    try{
        const players = await playersService.findAll();
        res.status(200).send(players);
    } catch (error) {
        next(error);
    }
};

const getPlayer = async (req: Request, res: Response<Player>, next: NextFunction) => {
    try {
        const validateResult = idObject.parse(req.params);
        const player = await playersService.findOne(validateResult.id);
        if (!player) {
            res.status(404);
            const error = new objectNotFoundError("Player", validateResult.id);
            next(error);
        }
        res.status(200).send(player as Player);
    } catch (error) {
        next(error);
    }
}

const createPlayer = async (req: Request, res: Response<Player>, next: NextFunction) => {
    try {
        const validateResult = PlayerObject.parse(req.body);
        const createResult = await playersService.createOne(validateResult);
        res.status(201).send(createResult);
    } catch (error) {
        next(error);
    }
};

const updatePlayer = async (req: Request, res: Response<Player>, next: NextFunction) => {
    try {
        const playerRequest = { ...req.body, id: req.params.id };
        const validateResult = PlayerWithIdObject.parse(playerRequest);
        const updateResult = await playersService.updateOne(playerRequest.id, validateResult);
        res.status(200).send(updateResult);
    } catch (error) {
        next(error);
    }
}

const deletePlayer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validateResult = idObject.parse(req.params);
        console.log(validateResult);
        const deleteResult = await playersService.deleteOne(validateResult.id);
        res.status(200).send(deleteResult);
    } catch (error) {
        next(error);
    }
}

const playersController = {
    getPlayers,
    getPlayer,
    createPlayer,
    updatePlayer,
    deletePlayer,
};

export default playersController;