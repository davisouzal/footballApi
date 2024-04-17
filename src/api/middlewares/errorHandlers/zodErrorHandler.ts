import { ZodError } from 'zod';
import { Request, Response } from 'express';
import IErrorResponse from '../../../interfaces/IErrorResponse';

const zodErrorHandler = (err: ZodError, req: Request, res: Response<IErrorResponse>) => {
    res.status(422);
    res.json({
        message: 'Validation error',
        errors: err.errors.map((error) => {
            return {
                field: error.path.join('.'),
                message: error.message,
            };
        }),
    });
    return;
}

export default zodErrorHandler;