import { Player } from "@prisma/client";
import prismaClient from "../../utils/prismaUtils";
import { PlayerType } from "./players.model";

const player = prismaClient.player;

const findAll = async ():Promise<Player[]> => {
  return player.findMany();
};

const createOne = async (playerData: PlayerType): Promise<Player> => {
  return player.create({ data: playerData });
}

const playersService = {
    findAll,
    createOne,
};

export default playersService;