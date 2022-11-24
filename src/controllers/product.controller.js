const { StatusCodes } = require('http-status-codes');
const ProductService = require('../services/product.service');

class ProductController {
    constructor() {
        this.productService = new ProductService();
    }

    async findAll(req, res, next) {
        try {
            const { offset, limit, priceMin, priceMax } = req.query;

            const products = await this.productService.findAll(offset, limit, priceMin, priceMax);
            res.status(StatusCodes.OK).json(products);
        } catch (error) {
            next(error);
        }
    }

    async findById(req, res, next) {
        try {
            const { id } = req.params;
            const product = await this.productService.findById(id);

            res.status(StatusCodes.OK).json(product);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const product = req.body;
            const newProduct = await this.productService.create(product);

            res.status(StatusCodes.CREATED).json(newProduct);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const productChanges = req.body;
            const productUpdate = await this.productService.update(
                id,
                productChanges
            );

            res.status(StatusCodes.OK).json(productUpdate);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            const resultDelete = await this.productService.delete(id);

            res.status(StatusCodes.OK).json(resultDelete);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ProductController;
