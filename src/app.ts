import express, { NextFunction, Response, Request, Express } from 'express';
import teamRouter from './api/routers/teamRouter';

const app:Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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