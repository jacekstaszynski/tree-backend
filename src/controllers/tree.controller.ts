
import TreeModel, { Tree } from "@/models/tree.model";
import TreeService from "@/services/tree.service";
import { NextFunction, Request, Response } from "express";

export default class TreeController {

    public treeService = new TreeService()
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const tree: Tree = req.body
            console.log("###" + tree)
            const model = await this.treeService.create(tree, null)
            res.status(200).json({ model })
        } catch (error) {
            next(error)
        }
    }

    public findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const models = await this.treeService.findAll()
            res.status(200).json({ models })
        } catch (error) {
            next(error)
        }
    }

    public findByName = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const name = req.params.name
            const models = await this.treeService.findByName(name)
            res.status(200).json({ models })
        } catch (error) {
            next(error)
        }
    }

    public findByOwner = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const ownerId = req.params.ownerId
            const models = await this.treeService.findByOwner(ownerId)
            res.status(200).json({ models })
        } catch (error) {
            next(error)
        }

    }

}
