'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');
const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customer.model');
const {
    ORDER_PRODUCT_TABLE,
    OrderProductSchema,
} = require('../models/order-product.model');
const { ORDER_TABLE, OrderSchema } = require('../models/order.model');
const { PRODUCCT_TABLE, ProductSchema } = require('../models/product.model');
const { USER_TABLE, UserSchema } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable(USER_TABLE, UserSchema);
        await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
        await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
        await queryInterface.createTable(PRODUCCT_TABLE, ProductSchema);
        await queryInterface.createTable(ORDER_TABLE, OrderSchema);
        await queryInterface.createTable(
            ORDER_PRODUCT_TABLE,
            OrderProductSchema
        );
    },

    async down(queryInterface) {
        await queryInterface.removeTable(USER_TABLE);
        await queryInterface.removeTable(CUSTOMER_TABLE);
        await queryInterface.removeTable(CATEGORY_TABLE);
        await queryInterface.removeTable(PRODUCCT_TABLE);
        await queryInterface.removeTable(ORDER_TABLE);
        await queryInterface.removeTable(ORDER_PRODUCT_TABLE);
    },
};
