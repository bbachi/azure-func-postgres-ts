import { BaseRequest } from "./base.request";
import { PaymentMethod } from '../model';

export class PaymentMethodRequest extends BaseRequest {

    paymentMethod: PaymentMethod;

}