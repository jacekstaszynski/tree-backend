import { NextFunction, Request, Response } from 'express';
import { HttpException } from "@exceptions/HttpException";

export const requireUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user;
        if (!user) {
            return next(new HttpException(401, `Invalid access. Please login again.`));
        }

        next();
    } catch (err: any) {
        next(err);
    }
};
