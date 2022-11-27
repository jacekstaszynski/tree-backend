import { NextFunction, Request, Response } from 'express';
import { BaseError } from '@/exceptions/BaseError';
import { logger } from '@/utils/logger';
import { StatusCodes } from 'http-status-codes';

const errorMiddleware = (exception: BaseError, req: Request, res: Response, next: NextFunction) => {
    try {
        if (exception.name === "ValidationError") {
            const fields = [];
            for (let error in exception.errors)
                fields.push({ field: error, message: exception.errors[error].properties.message });
            return res.status(StatusCodes.BAD_REQUEST)
                .json({ type: "VALIDATION ERRORS", fields: fields, message: exception.message });
        }
        else if (exception.name === "MongoServerError") {
            if (exception.message.includes("duplicate key")) {
                return res.status(StatusCodes.CONFLICT)
                    .json({ type: "DUPLICATED KEY", field: exception.keyValue, message: exception.message });
            }
        }
        else {
            logger.error(`[${req.method}] ${req.path} >> TYPE:: ${exception.constructor.name} STATUS CODE:: ${exception.statusCode} MESSAGE:: ${exception.message}`)
            return res.status(exception.statusCode || 500)
                .json({ type: exception.constructor.name, message: exception.message || "Unknown exception" })
        }
        return res.status(500).json({ message: 'Unknown exception' });
    } catch (error) {
        next(error);
    }
};

export default errorMiddleware;
