import { Router } from 'express';
import playersRouter from './entities/players/players.routes';
import teamsRouter from './entities/teams/teams.routes';

const routes : Router[] = [
    playersRouter,
    teamsRouter,
];

export default routes;