
export const APP_CONSTANTS = {
    
    DATABASE: {
        PAYMENT_METHOD_SAVE_QUERY: "INSERT INTO paymentmethods (tokenNumber, nickName, routingNumber) VALUES ($1, $2, $3)",
        PAYMENT_METHOD_LIST_QUERY: "SELECT * FROM paymentmethods",
        PAYMENT_METHOD_DELETE_QUERY: "DELETE FROM paymentmethods WHERE id = $1",
        PAYMENT_METHOD_UPDATE_QUERY: "UPDATE paymentmethods SET nickName = $1 WHERE id = $2"
    },
}