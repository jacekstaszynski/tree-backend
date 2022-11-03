import {NextFunction, Request, Response} from "express";
import AuthService from "@services/auth.service";

export default class AuthController {
    public service = new AuthService();

    public login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = await this.service.login(req.body.username, req.body.password);
            res.cookie("access_token", token, {httpOnly: true});
            res.status(200).json({token});
        } catch (error) {
            next(error);
        }
    }
}
