import { Pool, Client, PoolClient } from 'pg'

let poolClient: PoolClient;

export const connect = async (): Promise<PoolClient> => {

    const user = process.env.PG_USER || ""
    const host = process.env.PG_HOST || ""
    const database = process.env.PG_DATABASE || ""
    const password = process.env.PG_PASSWORD || ""
    const port = process.env.PG_PORT ? parseInt(process.env.PG_PORT) : 5432

    try {
    
        const pool = new Pool({
                user,
                host,
                database,
                password,
                port
            })

        poolClient = await pool.connect();
    } catch (err) {
        console.log(err)
    }

    return poolClient;

};