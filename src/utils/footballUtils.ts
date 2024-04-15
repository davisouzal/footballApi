// chamada da api e utils dela
import { config } from 'dotenv';
import { TeamType } from '../types/teamType';

config();
const API_TOKEN:string = process.env.API_TOKEN ?? '';
const footballUrl:string = 'http://api.football-data.org/v4';

export const getTeams = async (teamName:string):Promise<number> => {
    //precisa de lógica para filtrar com o offset, já que não mostra tudo de uma vez e então se não houver aquele time naquela faixa de ids, ele adiciona 50 ao offset e tenta novamente
    const responseTeams = await fetch(`${footballUrl}/teams`, {
        method: 'GET',
        headers: {
        'X-Auth-Token': API_TOKEN,
        },
    });
    
    // condicao a ser definida
    if(teamName === 'condicao'){
        return -1;
    }
    return 103
};

export const getTeamById = async (id:number):Promise<TeamType> => {
    const responseTeams = await fetch(`${footballUrl}/teams/${id}`, {
        method: 'GET',
        headers: {
        'X-Auth-Token': API_TOKEN,
        },
    });
    return responseTeams.json();
};
