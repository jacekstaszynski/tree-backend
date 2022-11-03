import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import BedController from "@controllers/bed.controller";
import {restrictTo} from "@middlewares/restrict.middleware";
import {Role} from "@models/user.model";

export default class BedRoute implements Routes {
    public path = '/bed';
    public router = Router();
    public bedController = new BedController();

    constructor() {
        this.init();
    }

    private init() {
        this.router.get(`${this.path}/date/between`, restrictTo(Role.Developer), this.bedController.findAllBedByDateBetween);
        this.router.post(`${this.path}/create`, this.bedController.create);
    }
}
