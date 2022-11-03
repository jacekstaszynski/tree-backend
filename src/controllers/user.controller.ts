import UserService from "@services/user.service";
import {NextFunction, Request, Response} from "express";
import {User} from "@models/user.model";

export default class UserController {
    public service = new UserService();

    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await this.service.create(req.body as User);
            res.status(200).send("Хэрэглэгч бүртгэгдлээ");
        } catch (error) {
            next(error);
        }
    }
}
