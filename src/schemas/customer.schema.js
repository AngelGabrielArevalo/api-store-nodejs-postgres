const Joi = require('joi');

const createCustomerSchema = Joi.object({
  id: Joi.number().integer().optional(),
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().length(10).optional(),
  userId: Joi.number().integer().required(),
});

const updateCustomerSchema = Joi.object({
    name: Joi.string().optional(),
    lastName: Joi.string().optional(),
    phone: Joi.string().length(10).optional(),
    userId: Joi.number().integer().optional(),
});

module.exports = { createCustomerSchema, updateCustomerSchema }
