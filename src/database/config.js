const environment = require('../configuration/environment');

const DB_USER = encodeURIComponent(environment.dbUser);
const DB_PASSWORD = encodeURIComponent(environment.dbPassword);
const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${environment.dbHost}:${environment.dbPort}/${environment.dbName}`;

module.exports = {
    development: {
        url: URI,
        dialect: 'postgres',
    },
    production: {
        url: URI,
        dialect: 'postgres',
    },
};
