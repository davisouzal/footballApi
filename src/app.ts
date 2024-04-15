import express, { NextFunction, Response, Request, Express } from 'express';
import { getTeamById, getTeams } from './utils/footballUtils';
import teamRouter from './api/routers/teamRouter';

const app:Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const response = getTeamById(101);
const response = getTeams('real madrid');

response.then((data) => {
    console.log(data);
});

app.use((request: Request, response: Response, nextFunction: NextFunction) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', '*');
    response.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    nextFunction();
});

app.use('/api/equipe', teamRouter);

export default app;