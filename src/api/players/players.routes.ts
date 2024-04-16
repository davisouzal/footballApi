import { Router } from 'express';
import playersController from './players.controller';

const playersRouter = Router();

playersRouter.get('/players', playersController.getPlayers);
playersRouter.post('/players', playersController.createPlayer);

export default playersRouter;