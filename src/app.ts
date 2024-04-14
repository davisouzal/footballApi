import express, { NextFunction, Response, Request, Express } from 'express';
import { getTeamByName } from './utils/footballUtils';
// import teamRouter from './api/controllers/teamRouter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const response = getTeamByName('real madrid');

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

// app.use('/api', teamRouter);

export default app;