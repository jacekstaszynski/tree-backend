
import TreeModel, { Tree } from "@/models/tree.model"
import { ClientSession } from "mongoose"

export default class TreeService {

    public create = async (tree: Tree, session?: ClientSession): Promise<Tree> => {
        return TreeModel.create({ tree }, { session: session }).then()
    }

    public findAll = async (): Promise<Tree[]> => {
        return TreeModel.find()
    }

    public findByName = async (name: String): Promise<Tree[]> => {
        return TreeModel.find({ name: name })
    }

    public findByOwner = async (ownerId: String) => {
        return TreeModel.find({ ownerId: ownerId })
    }
}