import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { PaymentMethodController } from '../src/controller';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const hubName = req.params && req.params.hubName;
    const paymentMethodController = new PaymentMethodController();
    let result: any;
    const HEADERS = {'Content-Type': 'application/json'}
    try {
        result = await paymentMethodController.listPaymentMethods();
        result.statusCode = 200;
        context.res = {
            body: result,
            headers: HEADERS
        };
        
    } catch(ex) {
        console.log("Exception occurred while listing Payment Methods --> ", ex);
        context.res = {
            status: 500,
            body: {message: ex.message},
            headers: HEADERS
        };
    }

};

export default httpTrigger;