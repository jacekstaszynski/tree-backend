import { TreeDTO } from "./tree.dto"

export interface RawImageDTO {
    geolocationX: Number
    geolocationY: Number
    trees: TreeDTO[]
}

//TODO: STATIC MAPPERS