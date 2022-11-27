
import CreateTreeException from "@/exceptions/CreateTreeException";
import RawImageModel, { RawImage } from "@/models/rawImage.model";
import { Tree } from "@/models/tree.model";
import { logger } from "@typegoose/typegoose/lib/logSettings";
import mongoose, { ClientSession } from "mongoose";
import TreeService from "./tree.service";


export default class RawImageService {

    public treeService = new TreeService()

    public async create(rawImage: RawImage): Promise<RawImage> {
        let session: ClientSession = await mongoose.startSession()

        return session.withTransaction(async () => {
            const fragmentation = this.calculateImageFragmentation(rawImage.image)
            let placement = 1
            let trees = []
            // ONLY FOR TESTING PURPOSES
            let treeFailures = []
            const images = this.divideImage(rawImage.image, fragmentation)
            images.forEach(async image => {
                let tree: Tree
                tree.image = image
                tree.rawImagePlacement = placement
                placement++

                this.treeService.create(tree).then((model) => {
                    trees.push(model)
                }
                ).catch(async (error) => {
                    logger.error(`Tree with with placement failed to save: ${placement}, ERROR: ${error}`);
                    treeFailures.push(tree)

                    // await session.abortTransaction()
                    // throw new CreateTreeException(error)
                })
            })
            rawImage.trees = trees
            return RawImageModel.create({ rawImage }, { session: session })
        })
            .then(() => session.commitTransaction())
            .then(() => session.endSession())
            .then()
    }

    public async findAll(): Promise<RawImage[]> {
        return RawImageModel.find()
    }

    public divideImage(image: Buffer, fragmentation: Number): Buffer[] {
        // TODO: implement method
        return []
    }
    public calculateImageFragmentation(image: Buffer): Number {
        // TODO: implement method
        return 9
    }
}