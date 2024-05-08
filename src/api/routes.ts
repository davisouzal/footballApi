import { Router } from 'express';
import playersRouter from './entities/players/players.routes';

const routes : Router[] = [
    playersRouter
];

export default routes;