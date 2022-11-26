import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";
import { RawImage } from "./rawImage.model";

// TODO: change lib to mongoose
@modelOptions({ schemaOptions: { timestamps: true, }, })
export class Tree {
    constructor(name: String, ownerId: String, imgUrl: String) {
        this.name = name
        this.ownerId = ownerId
        this.imgUrl = imgUrl
    }
    @prop({ type: Types.ObjectId })
    _id: Types.ObjectId;
    @prop({ unique: true, required: true })
    name: String;
    @prop({ unique: true })
    imgUrl: String;
    @prop()
    ownerId: String;
    //TODO: extend image as a separate type
    @prop()
    treeImage: Buffer
    @prop({ ref: () => RawImage })
    rawImage: Ref<RawImage>[]
}

const TreeModel = getModelForClass(Tree)

export default TreeModel