import { IResponse } from './response';

export class BaseResponse implements IResponse {
    
    statusCode: Number;
    result: any;
    error: any;
}