import { Request, Response, NextFunction } from "express";
import { PlayerType, PlayerWithId, Player } from "./players.model";
import playersService from "./players.service";

const getPlayers = async (req: Request, res: Response<PlayerType[]>, next: NextFunction) => {
    try{
        const players = await playersService.findAll();
        res.status(200).send(players);
    } catch (error) {
        next(error);
    }
};

const createPlayer = async (req: Request, res: Response<PlayerType>, next: NextFunction) => {
    try {
        const validateResult = await Player.parse(req.body);
        const createResult = await playersService.createOne(validateResult);
        res.status(201).send(createResult);
    } catch (error) {
        next(error);
    }
};

const playersController = {
    getPlayers,
    createPlayer,
};

export default playersController;