const {StatusCodes} = require('http-status-codes');
const CustomerService = require('../services/customer.service');


class CustomerController {
    constructor(){
        this.customerService = new CustomerService();
    }

    async findAll(req, res, next){
        try {
            const { offset, limit } = req.query;
            const customers = await this.customerService.findAll(offset, limit);
            res.status(StatusCodes.OK).json(customers);
        } catch(error) {
            next(error);
        }
    }

    async findById(req, res, next) {
        try {
            const {id} = req.params;
            const customer = await this.customerService.findById(id);

            res.status(StatusCodes.OK).json(customer);
        } catch(error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const customer = req.body;
            const newCustomer = await this.customerService.create(customer);

            res.status(StatusCodes.CREATED).json(newCustomer);
        } catch(error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params;
            const customerChanges = req.body;
            const customerUpdate = await this.customerService.update(id, customerChanges);

            res.status(StatusCodes.OK).json(customerUpdate);
        } catch(error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;

            const resultDelete = await this.customerService.delete(id);
            
            res.status(StatusCodes.OK).json(resultDelete);
        } catch(error) {
            next(error);
        }
    }
}


module.exports = CustomerController;