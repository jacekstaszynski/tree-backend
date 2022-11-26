

import RawImageModel, { RawImage } from "@/models/rawImage.model";
import { Tree } from "@/models/tree.model";
import { logger } from "@typegoose/typegoose/lib/logSettings";
import TreeService from "./tree.service";


export default class RawImageService {

    public treeService = new TreeService()

    public async create(rawImage: RawImage): Promise<RawImage> {
        const fragmentation = this.calculateImageFragmentation(rawImage.image)
        let placement = 1
        let trees = []
        const images = this.divideImage(rawImage.image, fragmentation)
        images.forEach(async image => {
            let tree: Tree
            tree.image = image
            tree.rawImagePlacement = placement
            placement++

            this.treeService.create(tree).then((model) => {
                trees.push()
            }
            ).catch((error) => {
                logger.error(`Tree with with placement: ${placement}, ERROR: ${error}`);
            })
        })
        rawImage.trees = trees
        const model = await RawImageModel.create(rawImage)
        return model
    }

    public async findAll(): Promise<RawImage[]> {
        return RawImageModel.find()
    }

    public divideImage(image: Buffer, fragmentation: Number): Buffer[] {
        return []
    }
    public calculateImageFragmentation(image: Buffer): Number {
        return 10
    }
}