const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class CustomerService {
    constructor() {}

    async findAll(offset, limit) {
        const options = { include: ['user'] };
        if (offset && limit) {
            options.offset = offset;
            options.limit = limit;
        }

        const customers = await models.Customer.findAll(options);
        return customers;
    }

    async findById(id) {
        const customer = await models.Customer.findByPk(id);
        if (!customer) {
            throw boom.notFound(`No existe un customer con el id  ${id}`);
        }

        return customer;
    }

    async create(customer) {
        const newCustomer = await models.Customer.create(customer);
        await newCustomer.save();

        return newCustomer;
    }

    async update(id, customerChanges) {
        const customer = await this.findById(id);
        const customerUpdate = await customer.update(customerChanges);

        return customerUpdate;
    }

    async delete(id) {
        const customer = await this.findById(id);
        await customer.destroy();

        return { id };
    }
}

module.exports = CustomerService;
