import { Pool, Client, PoolClient, QueryResult } from 'pg'
import { connect } from "../config/db.config";
import { APP_CONSTANTS } from '../util/constants';

export class PaymentMethodRepository {

    poolClient: PoolClient;
    constructor() {}

    public async listPaymentMethods(): Promise<any> {
        
        try {
            this.poolClient = await connect();
            const result: QueryResult = await this.poolClient.query(
                    APP_CONSTANTS.DATABASE.PAYMENT_METHOD_LIST_QUERY
                )
            if (result && result.rowCount > 0) {
                return result.rows;
            }
        } catch (err) {
            console.log("Error Occured while listing payment methods  ", err);
            return {statusCode: 500, message: err.message}
        }
        return null;
    }

    public async deletePaymentMethod(id: string): Promise<any> {
        
        try {
            this.poolClient = await connect();
            const result: QueryResult = await this.poolClient.query(
                    APP_CONSTANTS.DATABASE.PAYMENT_METHOD_DELETE_QUERY, [id]
                )
            if (result && result.rowCount > 0) {
                return {message: `Payment Method ${id} Deleted`}
            }
        } catch (err) {
            console.log("Error Occured while deleting payment methods  ", err);
            return {statusCode: 500, message: err.message}
        }
        return {};
    }

    public async editPaymentMethod(paymentMethod: any): Promise<any> {
       
        try {
            this.poolClient = await connect();
            const result: QueryResult = await this.poolClient.query(
                    APP_CONSTANTS.DATABASE.PAYMENT_METHOD_UPDATE_QUERY, [paymentMethod.nickName, paymentMethod.id]
                )
            if (result && result.rowCount > 0) {
                return {message: `Payment Method ${paymentMethod.id} Updated`}
            }
        } catch (err) {
            console.log("Error Occured while editing payment methods  ", err);
            return {statusCode: 500, message: err.message}
        }
        return {};
    }

    public async savePaymentMethod(paymentMethod: any): Promise<any> {

        try {
            this.poolClient = await connect();
            const result: QueryResult = await this.poolClient.query(
                    APP_CONSTANTS.DATABASE.PAYMENT_METHOD_SAVE_QUERY, 
                    [paymentMethod.tokenNumber, paymentMethod.nickName, paymentMethod.routingNumber]
                )
            
            if (result && result.rowCount > 0) {
                return {statusCode: 201, message: "Payment Method Saved"}
            }
        } catch (err) {
            console.log("Error Occured while saving payment method  ", err);
            return {statusCode: 500, message: err.message}
        }
        return null;
    
    }

    
}