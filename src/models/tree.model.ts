import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true, }, })
export class Tree {
    constructor(name, ownerId, imgUrl) {
        this.name = name
        this.ownerId = ownerId
        this.imgUrl = imgUrl
    }
    @prop({ unique: true, required: true })
    name: String;
    @prop({ required: true })
    ownerId: String;
    @prop({ unique: true, required: true })
    imgUrl: String;
}

const TreeModel = getModelForClass(Tree)

export default TreeModel