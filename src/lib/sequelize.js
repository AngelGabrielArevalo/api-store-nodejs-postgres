const { Sequelize } = require('sequelize');
const environment = require('../configuration/environment');
const setupModels = require('../database/models');

let URI;
let options;

if (environment.nodeEnv === 'production') {
    URI = environment.uriProduction;
    options = {
        dialect: 'postgres',
        logging: true,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
    };
} else {
    const DB_USER = encodeURIComponent(environment.dbUser);
    const DB_PASSWORD = encodeURIComponent(environment.dbPassword);
    URI = `postgres://${DB_USER}:${DB_PASSWORD}@${environment.dbHost}:${environment.dbPort}/${environment.dbName}`;
    options = {
        dialect: 'postgres',
        logging: true,
    };
}

const sequelize = new Sequelize(URI, options);

setupModels(sequelize);
sequelize.sync();
module.exports = sequelize;
