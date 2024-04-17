import { Router } from 'express';
import playersController from './players.controller';

const playersRouter = Router();

playersRouter.get('/players', playersController.getPlayers);
playersRouter.get('/players/:id', playersController.getPlayer);
playersRouter.post('/players', playersController.createPlayer);
playersRouter.put('/players/:id', playersController.updatePlayer);
playersRouter.delete('/players/:id', playersController.deletePlayer);

export default playersRouter;