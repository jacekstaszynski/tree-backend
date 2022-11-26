import { RawImageDTO } from "./rawImage.dto";

export interface TreeDTO {
    id: String;
    name: String;
    imgUrl: String;
    ownerId: String;
    rawImage: RawImageDTO
}

//TODO: STATIC MAPPERS