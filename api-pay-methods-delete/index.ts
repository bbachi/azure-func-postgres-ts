import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { PaymentMethodController } from '../src/controller';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const id: string = req.params && req.params.id;
    const paymentMethodController = new PaymentMethodController();
    let result: any;
    const HEADERS = {'Content-Type': 'application/json'}
    try {
        result = await paymentMethodController.deletePaymentMethod(id);
        result.statusCode = 200;
        context.res = {
            body: result,
            headers: HEADERS
        };
        
    } catch(ex) {
        console.log("Exception occurred while deleting payment --> ", ex);
        context.res = {
            status: 500,
            body: {message: ex.message},
            headers: HEADERS
        };
    }

};

export default httpTrigger;