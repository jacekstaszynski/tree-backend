import { NextFunction, Request, Response } from 'express';
import {HttpException} from "@exceptions/HttpException";
import {Role} from "@models/user.model";

export const restrictTo =
    (...allowedRoles: Role[]) =>
        (req: Request, res: Response, next: NextFunction) => {
            const user = res.locals.user;
            if (!allowedRoles.includes(user.role)) {
                return next(
                    new HttpException(403, 'Уг үйлдлийг хийх эрх байхгүй байна')
                );
            }

            next();
        };
