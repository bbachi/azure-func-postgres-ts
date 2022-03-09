import { PaymentMethod } from '../model';
import { PaymentMethodRepository } from '../repository';

export class PaymentMethodService {

    paymentMethodRepository: PaymentMethodRepository;

    constructor() {
        this.paymentMethodRepository = new PaymentMethodRepository();
    }

    public listPaymentMethods(): Promise<any> {
        return this.paymentMethodRepository.listPaymentMethods();
    }

    public deletePaymentMethod(id: string): Promise<any> {
        return this.paymentMethodRepository.deletePaymentMethod(id);
    }

    public editPaymentMethod(paymentMethod: PaymentMethod): Promise<any> {
        return this.paymentMethodRepository.editPaymentMethod(paymentMethod);
    }

    public savePaymentMethod(paymentMethod: PaymentMethod): Promise<any> {
        return this.paymentMethodRepository.savePaymentMethod(paymentMethod);
    }

}