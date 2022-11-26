const boom = require('@hapi/boom');
const { sequelize, setValSeq } = require('../lib/sequelize');
const { models } = sequelize;
const bcrypt = require('bcrypt');
const { USER_TABLE } = require('../database/models/user.model');
//const {setValSeq} = require('../lib/sequelize');
//const { USER_TABLE } = require('../database/models/user.model');

class UserService {
    constructor() {}

    async findAll(offset, limit) {
        const options = {};
        if (offset && limit) {
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

    async findByEmail(email) {
        const user = await models.User.scope('withPassword').findOne({
            where: {
                email,
            },
        });

        if (!user) {
            throw boom.unauthorized(`Error de username/contraseña`);
        }

        return user;
    }

    async create(user) {
        const hashPassword = await bcrypt.hash(user.password, 10);
        user = {
            ...user,
            password: hashPassword,
        };

        await setValSeq(USER_TABLE);
        const newUser = await models.User.create(user);
        await newUser.save();

        delete newUser.dataValues.password;
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
