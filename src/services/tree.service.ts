import { HttpException } from "@/exceptions/HttpException";
import TreeModel, { Tree } from "@/models/tree.model"
import { isEmpty } from "@/utils/util";

export default class TreeService {

    public create = async (tree: Tree): Promise<Tree> => {
        return TreeModel.create(tree)
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