const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class CategoryService {
    constructor() {}

    async findAll(offset, limit) {
        const options = { include: ['category'] };
        if (offset && limit) {
            options.offset = offset;
            options.limit = limit;
        }

        const categories = await models.Category.findAll(options);
        return categories;
    }

    async findById(id) {
        const category = await models.Category.findByPk(id, {
          include: ['products']
        });
        if (!category) {
            throw boom.notFound(`No existe un category con el id  ${id}`);
        }

        return category;
    }

    async create(category) {
        const newCategory = await models.Category.create(category);
        await newCategory.save();

        return newCategory;
    }

    async update(id, categoryChanges) {
        const category = await this.findById(id);
        const categoryUpdate = await category.update(categoryChanges);

        return categoryUpdate;
    }

    async delete(id) {
        const category = await this.findById(id);
        await category.destroy();

        return { id };
    }
}

module.exports = CategoryService;
