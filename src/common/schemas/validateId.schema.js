const Joi = require('joi');

const validateIdSchema = Joi.object({
    id: Joi.number().required(),
});

module.exports = { validateIdSchema };
