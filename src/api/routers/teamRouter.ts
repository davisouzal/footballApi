// router de team
import { Router } from 'express';
import { getTeamByName } from '../controllers/teamController';

const teamRouter:Router = Router();

teamRouter.get('/', getTeamByName);

export default teamRouter;

