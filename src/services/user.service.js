const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class UserService {
    constructor() {}

    async findAll(offset, limit) {
        const options = {};
        if(offset && limit) {
            options.offset = offset;
            options.limit = limit;
        }

        const users = await models.User.findAll(options);
        return users;
    }

    async findById(id) {
        const user = await models.User.findByPk(id);
        if (!user) {
            throw boom.notFound(`No existe un usuario con el id  ${id}`);
        }

        return user;
    }

    async create(user) {
        console.log(user)
        const newUser = await models.User.create(user);
        await newUser.save();

        return newUser;
    }

    async update(id, userChanges) {
        const user = await this.findById(id);
        const userUpdate = await user.update(userChanges);

        return userUpdate;
    }

    async delete(id) {
        const user = await this.findById(id);
        await user.destroy();

        return { id };
    }
}

module.exports = UserService;
