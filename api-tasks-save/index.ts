import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { TaskController } from '../src/controller';
import { TaskRequest } from "../src/request";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const request: TaskRequest = req.body;
    const taskController = new TaskController();
    let result: any;
    const HEADERS = {'Content-Type': 'application/json'}
    try {
        result = await taskController.createTask(request.task);
        result.statusCode = result.statusCode ? result.statusCode : 200;
        context.res = {
            body: result,
            headers: HEADERS
        };
        
    } catch(ex) {
        console.log("Exception occurred while creating task --> ", ex);
        context.res = {
            status: 500,
            body: {message: ex.message},
            headers: HEADERS
        };
    }

};

export default httpTrigger;