import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";
import { Tree } from "./tree.model";

// TODO: change lib to mongoose
@modelOptions({ schemaOptions: { timestamps: true, }, })
export class RawImage {
    constructor() {
    }
    @prop({ type: Types.ObjectId })
    _id: Types.ObjectId;
    @prop({ unique: true })
    geolocationX: Number
    @prop({ unique: true })
    geolocationY: Number
    //TODO: extend image as a separate type
    @prop()
    rawImage: Buffer
    @prop({ ref: () => Tree })
    trees: Ref<Tree>[]
}

const RawImageModel = getModelForClass(RawImage)