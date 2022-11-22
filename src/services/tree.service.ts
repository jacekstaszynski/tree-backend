
import { isEmpty } from "@utils/util";
import { HttpException } from "@exceptions/HttpException";
import { ITree, TreeModel } from "@/models/tree.model";

export default class TreeService {

    public async create(tree: ITree): Promise<ITree> {
        if (isEmpty(tree)) throw new HttpException(400, "Storage tree is unknown.");

        return TreeModel.create(tree)
    }

    public async findByName(name: string): Promise<ITree> {
        return TreeModel.findOne({ 'name': name })
    }
    public async findAll(): Promise<ITree[]> {
        return await TreeModel.find()


    }
}