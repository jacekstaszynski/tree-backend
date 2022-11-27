
import { NoMintableTreeError } from "@/exceptions/NoMintableTreeError"
import TreeModel, { Tree } from "@/models/tree.model"

export default class TreeService {

    public create = async (tree: Tree): Promise<Tree> => {
        return TreeModel.create({ tree })
    }
    public update = async (tree: Tree): Promise<Tree> => {
        return TreeModel.findOneAndUpdate({ tree })
    }

    // TODO: move to separate service/usecase if neccessary
    public mint = async (ownerId: String): Promise<Tree> => {
        await this.findMintableTree().catch().then()
        const tree = await this.findMintableTree()
        tree.ownerId = ownerId
        return this.update(tree)
    }
    public findMintableTree = async (): Promise<Tree> => {
        return TreeModel.findOne({ ownerId: { $eq: "" }, imgUrl: { $exists: true } }, (err, result) => {
            if (!result.lenght) throw new NoMintableTreeError("There is not more mintable trees in db", err)
            return result
        })
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

    // TODO: move to separate service/usecase if neccessary
    public sendToNftStorage = async (tree: Tree): Promise<String> => {
        // TODO: implement method
        return "www.google.com"
    }
}