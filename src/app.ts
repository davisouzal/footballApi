import express, { NextFunction, Response, Request, Express } from 'express';
import playersRouter from './api/players/players.routes';
import errorHandler from './api/middlewares/errorHandler';
import notFoundHandler from './api/middlewares/notFoundHandler';

const app:Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((request: Request, response: Response, next: NextFunction) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', '*');
    response.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

const routes = [playersRouter]

app.use('/api/v1', ...routes)

app.use(notFoundHandler)
app.use(errorHandler)

export default app;