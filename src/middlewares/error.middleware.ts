import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import ErrorInterface from '@/interfaces/error.interface';
import { logger } from '@typegoose/typegoose/lib/logSettings';

const errorMiddleware = (exception: HttpException, req: Request, res: Response, next: NextFunction) => {
    try {
        if (exception.name === "ValidationError") {
            const fields = [];
            for (let error in exception.errors)
                fields.push({ field: error, message: exception.errors[error].properties.message });
            return res.status(406).json({ type: ErrorInterface.VALIDATION, fields });
        } else if (exception.name === "MongoServerError") {
            if (exception.message.includes("duplicate key")) {
                return res.status(406).json({ type: ErrorInterface.DUPLICATION, field: exception.keyValue });
            }
        }

        else {
            const status: number = exception.status || 500;
            const message: string = exception.message || 'Unknown exception';

            logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
            return res.status(status).json({ message });
        }

        return res.status(500).json({ message: 'Unknown exception' });
    } catch (error) {
        next(error);
    }
};

export default errorMiddleware;
