import { Router } from 'express';
import playersController from './players.controller';
import { validateRequestHandler } from '../middlewares/validateRequestHandler';
import idObject from '../../utils/modelsUtils';
import { PlayerObject } from './players.model';

const playersRouter = Router();

playersRouter.get('/players',playersController.getPlayers);

playersRouter.get('/players/:id', 
validateRequestHandler({
    params: idObject,
}),
playersController.getPlayer);

playersRouter.post('/players', 
validateRequestHandler({
    body: PlayerObject,
}),
playersController.createPlayer);

playersRouter.put('/players/:id', 
validateRequestHandler({
    params: idObject,
    body: PlayerObject,
}),
playersController.updatePlayer);

playersRouter.delete('/players/:id',
validateRequestHandler({
    params: idObject,
}), 
playersController.deletePlayer);

export default playersRouter;