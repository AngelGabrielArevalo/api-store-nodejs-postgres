const { Router } = require('express');
const categoryRouter = require('./category.router');
const customerRouter = require('./customer.router');
const orderProductRouter = require('./order-product.router');
const orderRouter = require('./order.router');
const productRouter = require('./product.router');
const userRouter = require('./user.router');


const router = Router();

router.use('/users', userRouter);
router.use('/customers', customerRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/orderProducts', orderProductRouter);

module.exports = router;
