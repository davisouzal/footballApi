// chamada da api e utils dela
import { config } from 'dotenv';

config();
const API_TOKEN:string = process.env.API_TOKEN ?? '';
const footballUrl:string = 'http://api.football-data.org/v4';

export const getTeamByName = async (teamName:string) => {
    //precisa de lógica para filtrar com o offset, já que não mostra tudo de uma vez e então se não houver aquele time naquela faixa de ids, ele adiciona 50 ao offset e tenta novamente
    const responseTeams = await fetch(`${footballUrl}/teams?offset=50`, {
        method: 'GET',
        headers: {
        'X-Auth-Token': API_TOKEN,
        },
    });
    return responseTeams.json();
};
