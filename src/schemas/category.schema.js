const Joi = require('joi');

const createCategorySchema = Joi.object({
  id: Joi.number().integer().optional(),
  name: Joi.string().required(),
  image: Joi.string().required(),
});

const updateCategorySchema = Joi.object({
    name: Joi.string().optional(),
    image: Joi.string().optional(),
});

module.exports = { createCategorySchema, updateCategorySchema }
