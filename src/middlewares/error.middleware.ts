import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { logger } from '@utils/logger';
import ErrorInterface from "@interfaces/error.interface";

const errorMiddleware = (exception: HttpException, req: Request, res: Response, next: NextFunction) => {
    //TODO add middleware
};

export default errorMiddleware;
