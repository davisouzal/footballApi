import { Player } from "@prisma/client";
import prismaClient from "../../../utils/prismaUtils";
import { PlayerType } from "./players.model";
import { IDeleteResponse } from "../../../interfaces/IDeleteResponse";

const player = prismaClient.player;

const findAll = async (): Promise<Player[]> => {
  return player.findMany();
};

const findOne = async (playerId: string): Promise<Player | null> => {
  return player.findUniqueOrThrow({ where: { id: playerId } });
};

const createOne = async (playerData: PlayerType): Promise<Player> => {
  return player.create({ data: playerData });
};

const updateOne = async (
  playerId: string,
  playerData: PlayerType
): Promise<Player> => {
  return player.update({ where: { id: playerId }, data: playerData });
};

const deleteOne = async (
  playerId: string
): Promise<IDeleteResponse<Player>> => {
  const playerToDelete = await player.delete({ where: { id: playerId } });
  return {
    message: "Player deleted successfully",
    data: playerToDelete,
  };
};

const playersService = {
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};

export default playersService;
