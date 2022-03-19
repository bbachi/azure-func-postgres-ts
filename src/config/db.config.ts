import { Sequelize } from 'sequelize-typescript'
import { Tasks } from '../model/task.model';

export const connect = () => {

    const hostName = process.env.PG_HOST;
    const userName = process.env.PG_USER;
    const password = process.env.PG_PASSWORD;
    const database = process.env.PG_DATABASE;
    const dialect: any = process.env.PG_DIALECT;

    console.log('dialect  ', dialect)

    const operatorsAliases: any = false;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        operatorsAliases,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    sequelize.addModels([Tasks]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db;

}