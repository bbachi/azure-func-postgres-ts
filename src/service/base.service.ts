import axios, { AxiosResponse } from 'axios';

export class BaseService {

    constructor() {}

    public async post(url: string, body: any): Promise<AxiosResponse> {
       
        let result: AxiosResponse = await axios.post(url, body);
        return result;
    }

    public async get(url: string): Promise<AxiosResponse> {
       
        let result: AxiosResponse = await axios.get(url);
        return result;
    }

    public async put(url: string, body: any): Promise<AxiosResponse> {
       
        let result: AxiosResponse = await axios.put(url, body);
        return result;
    }


}