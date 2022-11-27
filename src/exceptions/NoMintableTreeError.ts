import { StatusCodes } from "http-status-codes";
import { BaseError } from "./BaseError";

export class NoMintableTreeError extends BaseError {
    constructor(message: string, errors: {}) {
        super(StatusCodes.NOT_FOUND, message, errors)
    }
}