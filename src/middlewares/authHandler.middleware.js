const boom = require('@hapi/boom');
const environment = require('../configuration/environment');

function checkApiKey(req, res, next) {
    const apiKey = req.headers['apikey'];
    console.log(apiKey, environment.apiKey);
    if(apiKey == environment.apiKey) {
        next();
    } else {
        next(boom.unauthorized('Necesita autorizacion'));
    }
}

module.exports = {checkApiKey};