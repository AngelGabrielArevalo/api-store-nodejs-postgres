const { Router } = require('express');
const { queryParamsSchema } = require('../common/schemas/queryParams.schema');
const OrderProductController = require('../controllers/order-product.controller');
const validatorHandler = require('../middlewares/validatorHandler.middleware');
const { createOrderProductSchema } = require('../schemas/order-product.schema');

const orderProductRouter = Router();
const orderProductController = new OrderProductController();

orderProductRouter.get(
    '/',
    validatorHandler(queryParamsSchema, 'query'),
    (req, res, next) => orderProductController.findAll(req, res, next)
);

orderProductRouter.post(
    '/',
    validatorHandler(createOrderProductSchema, 'body'),
    (req, res, next) => orderProductController.create(req, res, next)
);

module.exports = orderProductRouter;
