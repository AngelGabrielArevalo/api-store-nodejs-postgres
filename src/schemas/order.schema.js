const Joi = require('joi');

const createOrderSchema = Joi.object({
    id: Joi.number().integer().optional(),
    customerId: Joi.number().integer().required(),
});

const updateOrderSchema = Joi.object({
    customerId: Joi.number().integer().optional(),
});


module.exports = { createOrderSchema, updateOrderSchema }
