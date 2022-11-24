const { StatusCodes } = require('http-status-codes');
const OrderService = require('../services/order.service');

class OrderController {
    constructor() {
        this.orderService = new OrderService();
    }

    async findAll(req, res, next) {
        try {
            const { offset, limit } = req.query;

            const orders = await this.orderService.findAll(offset, limit);
            res.status(StatusCodes.OK).json(orders);
        } catch (error) {
            next(error);
        }
    }

    async findById(req, res, next) {
        try {
            const { id } = req.params;
            const order = await this.orderService.findById(id);

            res.status(StatusCodes.OK).json(order);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const order = req.body;
            const newOrder = await this.orderService.create(order);

            res.status(StatusCodes.CREATED).json(newOrder);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const orderChanges = req.body;
            const orderUpdate = await this.orderService.update(
                id,
                orderChanges
            );

            res.status(StatusCodes.OK).json(orderUpdate);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            const resultDelete = await this.orderService.delete(id);

            res.status(StatusCodes.OK).json(resultDelete);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = OrderController;
