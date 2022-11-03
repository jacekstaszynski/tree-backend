import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import {SECRET} from "@config";
import {User} from "@models/user.model";
import {HttpException} from "@exceptions/HttpException";

export const extractJWT = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Get the token
        let access_token;
        if (req.headers.authorization && req.headers.authorization.toLowerCase().startsWith('bearer')) {
            access_token = req.headers.authorization.split(' ')[1];
        } else if (req.cookies.access_token) {
            access_token = req.cookies.access_token;
        }

        if (!access_token) {
            return next(new HttpException(401, 'Хүчингүй хандалт. Дахин нэвтэрнэ үү.'));
        }

        // Validate Access Token
        const decoded = verifyJwt<{ user: User }>(access_token);

        if (!decoded) {
            return next(new HttpException(401, 'Хүчингүй хандалт. Дахин нэвтэрнэ үү.'));
        }

        res.locals.user = decoded.user;

        next();
    } catch (err: any) {
        next(err);
    }
}

export const signJWT = (user: User) => {
    return jwt.sign({user}, SECRET, {expiresIn: "1h"});
}

export const verifyJwt = <T>(token: string): T | null => {
    try {
        return jwt.verify(token, SECRET) as T;
    } catch (err) {
        return null;
    }
}
