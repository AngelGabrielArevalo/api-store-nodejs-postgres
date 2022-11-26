const { ORDER_PRODUCT_TABLE } = require('../database/models/order-product.model');
const { sequelize, setValSeq } = require('../lib/sequelize');
const { models } = sequelize;

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
        await setValSeq(ORDER_PRODUCT_TABLE);
        const newOrderProduct = await models.OrderProduct.create(orderProduct);
        await newOrderProduct.save();

        return newOrderProduct;
    }
}

module.exports = OrderProductService;
