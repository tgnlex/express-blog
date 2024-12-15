class AppError extends Error {
    statusCode: number;
    status: string;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode < 500 ? "error" : "fail";
        Error.captureStackTrace(this, this.constructor);
    }
}