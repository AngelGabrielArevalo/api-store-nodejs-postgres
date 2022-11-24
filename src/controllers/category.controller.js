const {StatusCodes} = require('http-status-codes');
const CategoryService = require('../services/category.service');


class CategoryController {
    constructor(){
        this.categoryService = new CategoryService();
    }

    async findAll(req, res, next){
        try {
            const { offset, limit } = req.query;

            const categories = await this.categoryService.findAll(offset, limit);
            res.status(StatusCodes.OK).json(categories);
        } catch(error) {
            next(error);
        }
    }

    async findById(req, res, next) {
        try {
            const {id} = req.params;
            const category = await this.categoryService.findById(id);

            res.status(StatusCodes.OK).json(category);
        } catch(error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const category = req.body;
            const newCategory = await this.categoryService.create(category);

            res.status(StatusCodes.CREATED).json(newCategory);
        } catch(error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params;
            const categoryChanges = req.body;
            const categoryUpdate = await this.categoryService.update(id, categoryChanges);

            res.status(StatusCodes.OK).json(categoryUpdate);
        } catch(error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;

            const resultDelete = await this.categoryService.delete(id);
            
            res.status(StatusCodes.OK).json(resultDelete);
        } catch(error) {
            next(error);
        }
    }
}


module.exports = CategoryController;