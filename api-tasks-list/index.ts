import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { TaskController } from '../src/controller';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const taskController = new TaskController();
    let result: any;
    const HEADERS = {'Content-Type': 'application/json'}
    try {
        result = await taskController.getTasks();
        result.statusCode = result.statusCode ? result.statusCode : 200;
        context.res = {
            body: result,
            headers: HEADERS
        };
        
    } catch(ex) {
        console.log("Exception occurred while listing tasks --> ", ex);
        context.res = {
            status: 500,
            body: {message: ex.message},
            headers: HEADERS
        };
    }

};

export default httpTrigger;