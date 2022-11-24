const { Router } = require('express');
const { queryParamsSchema } = require('../common/schemas/queryParams.schema');
const { validateIdSchema } = require('../common/schemas/validateId.schema');
const CustomerController = require('../controllers/customer.controller');
const validatorHandler = require('../middlewares/validatorHandler.middleware');
const {
    createCustomerSchema,
    updateCustomerSchema,
} = require('../schemas/customer.schema');

const customerRouter = Router();
const customerController = new CustomerController();

customerRouter.get(
    '/',
    validatorHandler(queryParamsSchema, 'query'),
    (req, res, next) => customerController.findAll(req, res, next)
);

customerRouter.get(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    (req, res, next) => customerController.findById(req, res, next)
);

customerRouter.post(
    '/',
    validatorHandler(createCustomerSchema, 'body'),
    (req, res, next) => customerController.create(req, res, next)
);

customerRouter.patch(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    validatorHandler(updateCustomerSchema, 'body'),
    (req, res, next) => customerController.update(req, res, next)
);

customerRouter.delete(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    (req, res, next) => customerController.delete(req, res, next)
);

module.exports = customerRouter;
