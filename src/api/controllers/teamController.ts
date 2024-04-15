import { Request, Response } from 'express';
import { getTeamById, getTeams } from '../../utils/footballUtils';
import { TeamType } from '../../types/teamType';

export const getTeamByName = async (request: Request, response: Response): Promise<Response> => {
    try { 
        const { teamName } = request.query as { teamName: string };
        if (!teamName) {
            return response.status(400).send('Missing team name');
        }

        const teams = await getTeams();

        const teamId = teams.find((team: TeamType) => team.name === teamName)?.id;
        if (!teamId) {
            return response.status(404).send('Team not found');
        }

        const team = await getTeamById(teamId);

        return response.status(200).send(team);
    } catch (error) {
        return response.status(500).send('Internal server error');
    }
};