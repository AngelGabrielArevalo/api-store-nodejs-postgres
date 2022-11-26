const boom = require('@hapi/boom');
const { CUSTOMER_TABLE } = require('../database/models/customer.model');
const { sequelize, setValSeq } = require('../lib/sequelize');
const { models } = sequelize;

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

    async findByUser(userId) {
        console.log('id de user  ',userId);
        const customer = await models.Customer.findOne({where: {userId}});
        if (!customer) {
            throw boom.notFound(`No existe un customer con un userId  ${userId}`);
        }

        return customer;
    }

    async create(customer) {
        await setValSeq(CUSTOMER_TABLE);
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
