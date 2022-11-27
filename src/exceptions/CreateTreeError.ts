import { StatusCodes } from "http-status-codes";
import { BaseError } from "./BaseError";

export class CreateTreeError extends BaseError {
    constructor(message: string, errors: {}) {
        super(StatusCodes.BAD_REQUEST, message, errors)
    }
}