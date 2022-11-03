export class HttpException extends Error {
    public status: number;
    public message: string;
    public errors?: {};
    public keyValue?: {};

    constructor(status: number, message: string, errors?: {}, keyValue?: {}) {
        super(message);
        this.status = status;
        this.message = message;
        this.errors = errors;
        this.keyValue = keyValue;
    }
}
