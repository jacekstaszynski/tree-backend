import bedModel, {Bed} from "@models/bed.model";
import {isEmpty} from "@utils/util";
import {HttpException} from "@exceptions/HttpException";

export default class BedService {
    public beds = bedModel;

    public async findAllBedByDateBetween(dateFrom: Date, dateTo: Date): Promise<Bed[]> {
        return this.beds.find({date: {$gte: dateFrom, $lte: dateTo}}, {_id: 0, __v: 0});
    }

    public async createBed(bed: Bed): Promise<Bed> {
        if (isEmpty(bed)) throw new HttpException(400, "bed is empty");
        return this.beds.create(bed);
    }
}
