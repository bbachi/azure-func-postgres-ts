import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { PaymentMethodController } from '../src/controller';
import { PaymentMethodRequest } from "../src/request";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const request: PaymentMethodRequest = req.body;
    const paymentMethodController = new PaymentMethodController();
    let result: any;
    const HEADERS = {'Content-Type': 'application/json'}
    try {
        result = await paymentMethodController.savePaymentMethod(request.paymentMethod);
        result.statusCode = result.statusCode ? result.statusCode : 200;
        context.res = {
            body: result,
            headers: HEADERS
        };
        
    } catch(ex) {
        console.log("Exception occurred while saving payment method --> ", ex);
        context.res = {
            status: 500,
            body: {message: ex.message},
            headers: HEADERS
        };
    }

};

export default httpTrigger;