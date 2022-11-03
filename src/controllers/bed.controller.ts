import BedService from "../services/bed.service";
import {NextFunction, Request, Response} from 'express';
import {Bed} from "@models/bed.model";

export default class BedController {
  public bedService = new BedService();

  public findAllBedByDateBetween = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dateFrom = new Date(Date.parse(req.query.dateFrom as string));
      const dateTo = new Date(Date.parse(req.query.dateTo as string));
      const models: Bed[] = await this.bedService.findAllBedByDateBetween(dateFrom, dateTo);
      res.status(200).json(models);
    } catch (error) {
      next(error);
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const model: Bed = await this.bedService.createBed(req.body);
      res.status(200).json(model);
    } catch (error) {
      console.log(error)
      next(error);
    }
  }

}
