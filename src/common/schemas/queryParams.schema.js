const Joi = require('joi');

const queryParamsSchema = Joi.object({
    offset: Joi.number().integer().min(0).optional(),
    limit: Joi.number().integer().min(0).optional(),
    priceMin: Joi.number().optional(),
    priceMax: Joi.number().when('priceMin', {
        is: Joi.number().required(),
        then: Joi.required()
    })
});

module.exports = { queryParamsSchema };
