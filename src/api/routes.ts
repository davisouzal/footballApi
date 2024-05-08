import { Router } from 'express';
import playersRouter from './entities/players/players.routes';
import teamsRouter from './entities/teams/teams.routes';
import usersRouter from './entities/users/users.routes';
import addressRouter from './entities/address/address.routes';

const routes : Router[] = [
    playersRouter,
    teamsRouter,
    usersRouter,
    addressRouter,
];

export default routes;