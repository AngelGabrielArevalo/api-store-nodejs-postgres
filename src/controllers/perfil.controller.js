const { StatusCodes } = require('http-status-codes');
const CustomerService = require('../services/customer.service');
const OrderService = require('../services/order.service');

class PerfilController {
    constructor() {
        this.orderService = new OrderService();
        this.customerService = new CustomerService();
    }

    async findOrders(req, res, next) {
        try {
            const user = req.user;
            const orders = await this.orderService.findByUser(user.sub);

            res.status(StatusCodes.OK).json(orders);
        } catch (error) {
            next(error);
        }
    }

    async createOrder(req, res, next) {
        try {
            const user = req.user;
            const customer = await this.customerService.findByUser(user.sub);
            const newOrder = await this.orderService.create({
                customerId: customer.id,
            });

            res.status(StatusCodes.CREATED).json(newOrder);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = PerfilController;
