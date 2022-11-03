import { Document, model, Schema } from "mongoose";

export interface Tree {
    name: string;
}

export const TreeSchema: Schema = new Schema<Tree>({
    name: { type: String, required: true }
})


export const TreeModel = model<Tree & Document>('Tree', TreeSchema);