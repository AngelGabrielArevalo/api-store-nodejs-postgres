const { StatusCodes } = require('http-status-codes');
const OrderProductService = require('../services/order-product.service');

class OrderProductController {
    constructor() {
        this.orderProductService = new OrderProductService();
    }

    async findAll(req, res, next) {
        try {
            const { offset, limit } = req.query;

            const orderProducts = await this.orderProductService.findAll(offset, limit);
            res.status(StatusCodes.OK).json(orderProducts);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const orderProduct = req.body;
            const newOrderProduct = await this.orderProductService.create(orderProduct);

            res.status(StatusCodes.CREATED).json(newOrderProduct);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = OrderProductController;
