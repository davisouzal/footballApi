import { Request, Response, NextFunction } from "express";
import { PlayerType } from "./players.model";
import playersService from "./players.service";

const getPlayers = async (req: Request, res: Response<PlayerType[]>, next: NextFunction) => {
    try{
        const players = await playersService.getPlayers();
        res.status(200).send(players);
    } catch (error) {
        next(error);
    }
};

const playersController = {
    getPlayers,
};

export default playersController;