import { Request, Response } from 'express';
import { getTeamById, getTeams } from '../../utils/footballUtils';
import { TeamType } from '../../types/teamType';
import { PlayerType } from '../../types/personType';

export const getTeamByName = async (request: Request, response: Response): Promise<void> => {
    // Fazer verificações
    try { 
        const { teamName } = request.params;
        const teamId = await getTeams(teamName);

        if (teamId === -1) {
            response.status(404).send('Team not found');
        }
        
        const team: TeamType = await getTeamById(teamId);

        // const mostPaidPlayers = team.squad.sort((a:PlayerType, b:PlayerType => b.salary - a.salary).slice(0, 11);

        // response.status(200).send(mostPaidPlayers);
    } catch (error) {
        response.status(500).send('Internal server error');
    }
};