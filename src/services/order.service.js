const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class OrderService {
    constructor() {}

    async findAll(offset, limit) {
        const options = { include: ['customer'] };
        if (offset && limit) {
            options.offset = offset;
            options.limit = limit;
        }

        const orders = await models.Order.findAll(options);
        return orders;
    }

    async findById(id) {
        const order = await models.Order.findByPk(id, {
            include: [
                {
                    association: 'customer',
                    include: ['user']
                },
                'products'
            ]
        });
        if (!order) {
            throw boom.notFound(`No existe una orden con el id  ${id}`);
        }

        return order;
    }

    async create(order) {
        const newOrder = await models.Order.create(order);
        await newOrder.save();

        return newOrder;
    }

    async update(id, orderChanges) {
        const order = await this.findById(id);
        const orderUpdate = await order.update(orderChanges);

        return orderUpdate;
    }

    async delete(id) {
        const order = await this.findById(id);
        await order.destroy();

        return { id };
    }
}

module.exports = OrderService;
