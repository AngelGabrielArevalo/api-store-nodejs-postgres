const { Router } = require('express');
const categoryRouter = require('./category.router');
const customerRouter = require('./customer.router');
const orderProductRouter = require('./order-product.router');
const orderRouter = require('./order.router');
const productRouter = require('./product.router');
const userRouter = require('./user.router');
const cargarBase = require('../database/seeders/seed');
const { checkApiKey } = require('../middlewares/authHandler.middleware');
const authRouter = require('./auth.router');
const perfilRouter = require('./perfil.router');

const router = Router();

router.use('/users', checkApiKey, userRouter);
router.use('/customers', customerRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/orderProducts', orderProductRouter);
router.use('/auth', authRouter);
router.use('/perfil', perfilRouter);
router.get('/seed', cargarBase);

module.exports = router;
