import prismaClient from "@utils/prismaUtils";
import { TeamType } from "./teams.model";

const { team } = prismaClient;

const findAll = async () => {
  return team.findMany();
};

const findOne = async (teamId: string) => {
  return team.findUniqueOrThrow({ where: { id: teamId } });
};

const createOne = async (teamData: TeamType) => {
  return team.create({ data: teamData });
};

const updateOne = async (teamId: string, teamData: TeamType) => {
  return team.update({ where: { id: teamId }, data: teamData });
};

const deleteOne = async (teamId: string) => {
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