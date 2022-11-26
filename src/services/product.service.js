/* eslint-disable no-undef */
const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const { PRODUCCT_TABLE } = require('../database/models/product.model');
const { sequelize, setValSeq } = require('../lib/sequelize');
const { models } = sequelize;

class ProductService {
    constructor() {}

    async findAll(offset, limit, priceMin, priceMax) {
        const options = { include: ['category'], where: {} };
        if (offset && limit) {
            options.offset = offset;
            options.limit = limit;
        }
        if(priceMin && priceMax) {
            options.where.price = {
                [Op.between]: [priceMin, priceMax]
            }
        }
        console.log(options);
        const products = await models.Product.findAll(options);
        return products;
    }

    async findById(id) {
        const product = await models.Product.findByPk(id);
        if (!product) {
            throw boom.notFound(`No existe un product con el id  ${id}`);
        }

        return product;
    }

    async create(product) {
        await setValSeq(PRODUCCT_TABLE);
        const newProduct = await models.Product.create(product);
        await newProduct.save();

        return newProduct;
    }

    async update(id, productChanges) {
        const product = await this.findById(id);
        const productUpdate = await product.update(productChanges);

        return productUpdate;
    }

    async delete(id) {
        const product = await this.findById(id);
        await product.destroy();

        return { id };
    }
}

module.exports = ProductService;
