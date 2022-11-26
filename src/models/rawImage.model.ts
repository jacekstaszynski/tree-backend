
import { Document, model, Schema } from "mongoose";
import { Tree } from "./tree.model";

export interface RawImage {
    geolocationX: Number,
    geolocationY: Number,
    image: Buffer
    trees: Tree[]
}

const rawImageSchema = new Schema<RawImage>({
    geolocationX: { type: Number },
    geolocationY: { type: Number },
    image: { type: Buffer },
    trees: [{
        type: Schema.Types.ObjectId,
        ref: "Tree"
    }]
})

const RawImageModel = model<RawImage & Document>("RawImage", rawImageSchema)
export default RawImageModel