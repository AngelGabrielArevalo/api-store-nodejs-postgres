const { Router } = require('express');
const { queryParamsSchema } = require('../common/schemas/queryParams.schema');
const { validateIdSchema } = require('../common/schemas/validateId.schema');
const OrderController = require('../controllers/order.controller');
const validatorHandler = require('../middlewares/validatorHandler.middleware');
const {
    createOrderSchema,
    updateOrderSchema,
} = require('../schemas/order.schema');

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get(
    '/',
    validatorHandler(queryParamsSchema, 'query'),
    (req, res, next) => orderController.findAll(req, res, next)
);

orderRouter.get(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    (req, res, next) => orderController.findById(req, res, next)
);


orderRouter.post(
    '/',
    validatorHandler(createOrderSchema, 'body'),
    (req, res, next) => orderController.create(req, res, next)
);

orderRouter.patch(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    validatorHandler(updateOrderSchema, 'body'),
    (req, res, next) => orderController.update(req, res, next)
);

orderRouter.delete(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    (req, res, next) => orderController.delete(req, res, next)
);

module.exports = orderRouter;
