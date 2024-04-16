import { Player } from "@prisma/client";
import prismaClient from "../../utils/prismaUtils";

const player = prismaClient.player;

const getPlayers = async ():Promise<Player[]> => {
  return player.findMany();
};

const playersService = {
    getPlayers,
};

export default playersService;