import { BaseRequest } from "./base.request";
import { Tasks } from '../model';

export class TaskRequest extends BaseRequest {

    task: Tasks;

}