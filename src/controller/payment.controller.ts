import { PaymentService } from '../service';

export class PaymentController {

    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    public listPayments(): Promise<any> {
        return this.paymentService.listPayments();
    }

}