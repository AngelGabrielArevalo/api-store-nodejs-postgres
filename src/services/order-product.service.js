const { models } = require('../lib/sequelize');

class OrderProductService {
    constructor() {}

    async findAll(offset, limit) {
        const options = {};
        if (offset && limit) {
            options.offset = offset;
            options.limit = limit;
        }

        const orderProducts = await models.OrderProduct.findAll(options);
        return orderProducts;
    }

    async create(orderProduct) {
        const newOrderProduct = await models.OrderProduct.create(orderProduct);
        await newOrderProduct.save();

        return newOrderProduct;
    }
}

module.exports = OrderProductService;
