
import RawImageController from "@/controllers/rawImage.controller";
import { Routes } from "@/interfaces/routes.interface";

import express from "express";

export default class RawImageRouter implements Routes {
    public path = "/raw-image";
    public router = express.Router();
    public controller = new RawImageController()

    constructor() {
        this.init();
    }

    private init() {
        this.router.post(`${this.path}`, this.controller.create);
        this.router.get(`${this.path}/find-all`, this.controller.findAll);
    }
}
