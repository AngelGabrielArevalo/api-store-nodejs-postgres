const { Router } = require('express');
const { queryParamsSchema } = require('../common/schemas/queryParams.schema');
const { validateIdSchema } = require('../common/schemas/validateId.schema');
const UserController = require('../controllers/user.controller');
const validatorHandler = require('../middlewares/validatorHandler.middleware');
const {
    createUserSchema,
    updateUserSchema,
} = require('../schemas/user.schema');

const userRouter = Router();
const userController = new UserController();

userRouter.get(
    '/',
    validatorHandler(queryParamsSchema, 'query'),
    (req, res, next) => userController.findAll(req, res, next)
);

userRouter.get(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    (req, res, next) => userController.findById(req, res, next)
);

userRouter.post(
    '/',
    validatorHandler(createUserSchema, 'body'),
    (req, res, next) => userController.create(req, res, next)
);

userRouter.patch(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    (req, res, next) => userController.update(req, res, next)
);

userRouter.delete(
    '/:id',
    validatorHandler(validateIdSchema, 'params'),
    (req, res, next) => userController.delete(req, res, next)
);

module.exports = userRouter;
