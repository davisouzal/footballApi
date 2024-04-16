import { Router } from 'express';
import playersController from './players.controller';

const playersRouter = Router();

playersRouter.get('/players', playersController.getPlayers);

export default playersRouter;