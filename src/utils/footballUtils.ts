import { config } from 'dotenv';
import { TeamType } from '../types/teamType';

config();
const API_TOKEN:string = process.env.API_TOKEN ?? '';
const footballUrl:string = 'http://api.football-data.org/v4';

export const getTeams = async ():Promise<TeamType[]> => {
    const responseTeams = await fetch(`${footballUrl}/teams`, {
        method: 'GET',
        headers: {
        'X-Auth-Token': API_TOKEN,
        },
    })
    .then((response) => response.json());

    const teams = responseTeams.teams;
    
    return (teams);
};

export const getTeamById = async (id:number):Promise<TeamType> => {
    const responseTeams = await fetch(`${footballUrl}/teams/${id}`, {
        method: 'GET',
        headers: {
        'X-Auth-Token': API_TOKEN,
        },
    })
    .then((response) => response.json());

    return responseTeams;
};
