const Joi = require('joi');

const createProductSchema = Joi.object({
  id: Joi.number().integer().optional(),
  name: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  categoryId: Joi.number().integer().required(),
});

const updateProductSchema = Joi.object({
    name: Joi.string().optional(),
    image: Joi.string().optional(),
    description: Joi.string().optional(),
    price: Joi.number().optional(),
    categoryId: Joi.number().integer().optional(),
});

module.exports = { createProductSchema, updateProductSchema }
