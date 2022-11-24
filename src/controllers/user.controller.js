/* eslint-disable no-console */
const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/user.service');

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async findAll(req, res, next) {
        try {
            const { offset, limit } = req.query;
            const users = await this.userService.findAll(offset, limit);
            res.status(StatusCodes.OK).json(users);
        } catch (error) {
            next(error);
        }
    }

    async findById(req, res, next) {
        try {
            const { id } = req.params;
            const user = await this.userService.findById(id);

            res.status(StatusCodes.OK).json(user);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const user = req.body;
            const newUser = await this.userService.create(user);

            res.status(StatusCodes.CREATED).json(newUser);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const userChanges = req.body;
            const userUpdate = await this.userService.update(id, userChanges);

            res.status(StatusCodes.OK).json(userUpdate);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            const resultDelete = await this.userService.delete(id);

            res.status(StatusCodes.OK).json(resultDelete);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
