
import TreeModel, { Tree } from "@/models/tree.model";
import { NextFunction, Request, Response } from "express";
import { toNamespacedPath } from "path";

export default class TreeController {

    public create = async (req: Request, res: Response, next: NextFunction) => {
        const { name, ownerId, imgUrl } = req.body
        const tree = new Tree(name, ownerId, imgUrl)
        return TreeModel.create(tree)
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

    public findByOwner = async (req: Request, res: Response, next: NextFunction) => {
        const ownerId = req.params.ownerId
        return TreeModel.find({ ownerId: ownerId })
            .then(trees => res.status(200).json({ trees }))
            .catch(error => res.status(500).json({ error }))

    }

}
