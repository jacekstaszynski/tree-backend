import {Routes} from "@interfaces/routes.interface";
import express from "express";
import UserController from "@controllers/user.controller";
import {extractJWT} from "@middlewares/jwt.middleware";
import {requireUser} from "@middlewares/require.middleware";

export default class UserRoute implements Routes {
    public path = "/user";
    public router = express.Router();
    public controller = new UserController();

    constructor() {
        this.router.use(extractJWT, requireUser);
        this.init();
    }

    private init() {
        this.router.post(`${this.path}/create`, this.controller.create);
    }
}
