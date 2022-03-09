import { PaymentMethod } from '../model';
import { PaymentMethodService } from '../service';

export class PaymentMethodController {

    private paymentMethodService: PaymentMethodService;

    constructor() {
        this.paymentMethodService = new PaymentMethodService();
    }

    public listPaymentMethods(): Promise<any> {
        return this.paymentMethodService.listPaymentMethods();
    }

    public deletePaymentMethod(id: string): Promise<any> {
        return this.paymentMethodService.deletePaymentMethod(id);
    }

    public editPaymentMethod(paymentMethod: PaymentMethod): Promise<any> {
        return this.paymentMethodService.editPaymentMethod(paymentMethod);
    }

    public savePaymentMethod(paymentMethod: PaymentMethod): Promise<any> {
        return this.paymentMethodService.savePaymentMethod(paymentMethod);
    }

}