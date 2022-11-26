
import { RawImage } from "@/models/rawImage.model";
import RawImageService from "@/services/rawImage.service";

import { NextFunction, Request, Response } from "express";

export default class RawImageController {

    public rawImageService = new RawImageService()

    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const rawImage: RawImage = req.body
            const model = await this.rawImageService.create(rawImage)
            res.status(200).json({ model })
        } catch (error) {
            next(error)
        }
    }

    public findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const models = await this.rawImageService.findAll()
            res.status(200).json({ models })
        } catch (error) {
            next(error)
        }


    }
}