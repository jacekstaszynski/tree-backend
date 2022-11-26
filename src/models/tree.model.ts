
import { Document, model, Schema } from "mongoose";
import { RawImage } from "./rawImage.model";

export interface Tree {
    name: String,
    imgUrl: String,
    ownerId: String,
    image: Buffer,
    rawImagePlacement: Number,
    rawImage: RawImage
}

const treeSchema = new Schema<Tree>({
    name: { type: String },
    imgUrl: { type: String },
    ownerId: { type: String },
    image: { type: Buffer },
    rawImage: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "RawImage"
    }
})

const TreeModel = model<Tree & Document>('Tree', treeSchema)
export default TreeModel