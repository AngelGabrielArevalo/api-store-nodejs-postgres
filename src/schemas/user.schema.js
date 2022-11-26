const Joi = require('joi');

const createUserSchema = Joi.object({
  id: Joi.number().integer().optional(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
  role: Joi.string().min(3).optional()
});

const updateUserSchema = Joi.object({
  email: Joi.string().email().optional(),
  password: Joi.string().min(3).optional(),
  role: Joi.string().min(3).optional()
});

module.exports = { createUserSchema, updateUserSchema }
