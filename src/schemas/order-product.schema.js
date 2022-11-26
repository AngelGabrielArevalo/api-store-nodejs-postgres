const Joi = require('joi');

const createOrderProductSchema = Joi.object({
    id: Joi.number().integer().optional(),
    orderId: Joi.number().integer().required(),
    productId: Joi.number().integer().required(),
    amount: Joi.number().integer().required(),
});


module.exports = { createOrderProductSchema };
