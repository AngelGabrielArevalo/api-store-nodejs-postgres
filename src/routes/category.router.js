const { Router } = require('express');
const { queryParamsSchema } = require('../common/schemas/queryParams.schema');
const { validateIdSchema } = require('../common/schemas/validateId.schema');
const CategoryController = require('../controllers/category.controller');
const validatorHandler = require('../middlewares/validatorHandler.middleware');
const {
    createCategorySchema,
    updateCategorySchema,
} = require('../schemas/category.schema');

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.get(
    '/',
    validatorHandler(queryParamsSchema, 'query'),
    (req, res, next) => categoryController.findAll(req, res, next)
);

categoryRouter.get(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    (req, res, next) => categoryController.findById(req, res, next)
);

categoryRouter.post(
    '/',
    validatorHandler(createCategorySchema, 'body'),
    (req, res, next) => categoryController.create(req, res, next)
);

categoryRouter.patch(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    (req, res, next) => categoryController.update(req, res, next)
);

categoryRouter.delete(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    (req, res, next) => categoryController.delete(req, res, next)
);

module.exports = categoryRouter;
