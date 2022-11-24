const { Router } = require('express');
const { queryParamsSchema } = require('../common/schemas/queryParams.schema');
const { validateIdSchema } = require('../common/schemas/validateId.schema');
const ProductController = require('../controllers/product.controller');
const validatorHandler = require('../middlewares/validatorHandler.middleware');
const {
    createProductSchema,
    updateProductSchema,
} = require('../schemas/product.schema');

const productRouter = Router();
const productController = new ProductController();

productRouter.get(
    '/',
    validatorHandler(queryParamsSchema, 'query'),
    (req, res, next) => productController.findAll(req, res, next)
);

productRouter.get(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    (req, res, next) => productController.findById(req, res, next)
);

productRouter.post(
    '/',
    validatorHandler(createProductSchema, 'body'),
    (req, res, next) => productController.create(req, res, next)
);

productRouter.patch(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    (req, res, next) => productController.update(req, res, next)
);

productRouter.delete(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    (req, res, next) => productController.delete(req, res, next)
);

module.exports = productRouter;
