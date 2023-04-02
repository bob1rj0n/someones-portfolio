export declare class BaseResponse {
    code: number;
    message: string;
    data: any;
    success: boolean;
    statusCode: number;
    time: Date;
    constructor(code: number, message: string, data: any, success?: boolean, statusCode?: number, time?: Date);
    static UnknownError(data?: any): BaseResponse;
    static ValidationError(data?: any): BaseResponse;
    static Success(data?: any): BaseResponse;
    static UnAuthorizationError(data?: any): BaseResponse;
    static NotFound(data?: any): BaseResponse;
    static InvalidToken(data?: any): BaseResponse;
    static InvalidImg(data?: any): BaseResponse;
    static InvalidAmount(data?: any): BaseResponse;
}
