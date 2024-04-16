import { NextFunction, Request, Response } from 'express';
import IErrorResponse from '../../interfaces/IErrorResponse';

const errorHandler = (err: Error, req: Request, res: Response<IErrorResponse>, next: NextFunction) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    console.log(err)
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
        });
}

export default errorHandler;