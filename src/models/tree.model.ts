import { Document, model, Schema } from "mongoose";

export interface ITree {
    name: string;
}

export const TreeSchema: Schema = new Schema<ITree>({
    name: { type: String, required: true }
})


export const TreeModel = model<ITree & Document>('Tree', TreeSchema);