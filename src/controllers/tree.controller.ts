
import TreeService from "@/services/tree.service";
import { NextFunction, Request, Response } from "express";
import {
    TreeModel
} from "@/models/tree.model";
export default class TreeController {
    public service = new TreeService();

    public create = async (req: Request, res: Response, next: NextFunction) => {

    }
    public findAll = async (req: Request, res: Response, next: NextFunction) => {
        return TreeModel.find()
            .then(trees => res.status(200).json({ trees }))
            .catch(error => res.status(500).json({ error }))
    }


    public findByName = async (req: Request, res: Response, next: NextFunction) => {
        const name = req.params.name
        return TreeModel.find({ name: name })
            .then(trees => res.status(200).json({ trees }))
            .catch(error => res.status(500).json({ error }))

    }

}
