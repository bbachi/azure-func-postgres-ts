import { Axios, AxiosResponse } from 'axios';
import { PaymentMethod } from '../model';
import { PaymentMethodRepository } from '../repository';
import { BaseService } from './base.service';

export class PaymentService extends BaseService {

    paymentMethodRepository: PaymentMethodRepository;

    constructor() {
        super();
    }

    public async listPayments(): Promise<any> {
        const url: string = process.env.PAYMENT_GATEWAY_URL;

        const res: AxiosResponse = await this.get(url);
        return res.data;
    }

}