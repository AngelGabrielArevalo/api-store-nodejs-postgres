const Joi = require('joi');

const createOrderProductSchema = Joi.object({
    orderId: Joi.number().integer().required(),
    productId: Joi.number().integer().required(),
    amount: Joi.number().integer().required(),
});


module.exports = { createOrderProductSchema };
