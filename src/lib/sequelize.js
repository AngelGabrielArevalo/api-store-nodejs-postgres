const { Sequelize } = require('sequelize');
const environment = require('../configuration/environment');
const setupModels = require('../database/models');

const DB_USER = encodeURIComponent(environment.dbUser);
const DB_PASSWORD = encodeURIComponent(environment.dbPassword);
const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${environment.dbHost}:${environment.dbPort}/${environment.dbName}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
});

setupModels(sequelize);

module.exports = sequelize;
