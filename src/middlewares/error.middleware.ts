import {NextFunction, Request, Response} from 'express';
import {HttpException} from '@exceptions/HttpException';
import {logger} from '@utils/logger';
import ErrorInterface from "@interfaces/error.interface";

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    try {
        if (error.name === "ValidationError") {
            const fields = [];
            for (let k in error.errors) fields.push({field: k, message: error.errors[k].properties.message});
            return res.status(406).json({type: ErrorInterface.VALIDATION, fields});
        } else if (error.name === "MongoServerError") {
            if (error.message.includes("duplicate key")) {
                return res.status(406).json({type: ErrorInterface.DUPLICATION, field: error.keyValue});
            }
        } else {
            const status: number = error.status || 500;
            const message: string = error.message || 'Something went wrong';

            logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
            return res.status(status).json({message});
        }

        return res.status(500).json({message: 'Something went wrong'});
    } catch (error) {
        next(error);
    }
};

export default errorMiddleware;
