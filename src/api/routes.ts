import { Router } from 'express';
import playersRouter from './entities/players/players.routes';
import teamsRouter from './entities/teams/teams.routes';
import usersRouter from './entities/users/users.routes';

const routes : Router[] = [
    playersRouter,
    teamsRouter,
    usersRouter,
];

export default routes;