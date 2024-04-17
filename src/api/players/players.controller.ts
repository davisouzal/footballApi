import { Request, Response, NextFunction } from "express";
import { PlayerType, PlayerWithId, PlayerObject } from "./players.model";
import { Player } from "@prisma/client";
import playersService from "./players.service";

const getPlayers = async (req: Request, res: Response<Player[]>, next: NextFunction) => {
    try{
        const players = await playersService.findAll();
        res.status(200).send(players);
    } catch (error) {
        next(error);
    }
};

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
        const playerId  = req.query.id;
        const validateResult = PlayerObject.parse(req.body);
        const updateResult = await playersService.updateOne(playerId, validateResult);
        res.status(200).send(updateResult);
    } catch (error) {
        next(error);
    }
}

const playersController = {
    getPlayers,
    createPlayer,
};

export default playersController;