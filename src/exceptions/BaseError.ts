export class BaseError extends Error {
    public statusCode: number;
    public errors?: {};
    public keyValue?: {};

    constructor(status: number, message: string, errors?: {}, keyValue?: {}) {
        super(message);
        this.statusCode = status;
        this.errors = errors;
        this.keyValue = keyValue;
    }
}
