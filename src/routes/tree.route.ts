
import TreeController from "@/controllers/tree.controller";
import { Routes } from "@/interfaces/routes.interface";

import express from "express";

export default class TreeRouter implements Routes {
    public path = "/tree";
    public router = express.Router();
    public controller = new TreeController()

    constructor() {
        this.init();
    }

    private init() {
        this.router.post(`${this.path}`, this.controller.create);
        this.router.post(`${this.path}/:ownerId/mint-tree`, this.controller.mintTree);
        this.router.get(`${this.path}/find/:name`, this.controller.findByName);
        this.router.get(`${this.path}/find/:ownerId`, this.controller.findByName);
        this.router.get(`${this.path}/find-all`, this.controller.findAll);
    }
}
