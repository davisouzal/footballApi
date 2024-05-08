import prismaClient from "@utils/prismaUtils";
import { TeamType } from "./teams.model";
import { Team } from "@prisma/client";
import { IDeleteResponse } from "@interfaces/IDeleteResponse";

const { team } = prismaClient;

const findAll = async () : Promise<Team[]> => {
  return team.findMany();
};

const findOne = async (teamId: string) : Promise<Team | null>=> {
  return team.findUnique({ where: { id: teamId } });
};

const createOne = async (teamData: TeamType) : Promise<Team> => {
  return team.create({ data: teamData });
};

const updateOne = async (teamId: string, teamData: TeamType) : Promise<Team> => {
  return team.update({ where: { id: teamId }, data: teamData });
};

const deleteOne = async (teamId: string) : Promise<IDeleteResponse<Team>> => {
  const teamToDelete = await team.delete({ where: { id: teamId } });
  return {
    message: "Team deleted successfully",
    data: teamToDelete,
  };
};

const teamsService = {
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};

export default teamsService;