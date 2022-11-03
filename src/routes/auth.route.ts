import {Routes} from "@interfaces/routes.interface";
import express from "express";
import AuthController from "@controllers/auth.controller";

export default class AuthRoute implements Routes {
    public path = "/auth";
    public router = express.Router();
    public controller = new AuthController();

    constructor() {
        this.init();
    }

    private init() {
        this.router.post(`${this.path}/login`, this.controller.login);
    }
}
