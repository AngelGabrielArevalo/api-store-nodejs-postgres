const { Model, DataTypes, Sequelize } = require('sequelize');
const { ORDER_TABLE } = require('./order.model');
const { PRODUCCT_TABLE } = require('./product.model');

const ORDER_PRODUCT_TABLE = 'orders_products';

class OrderProduct extends Model {
    static associate() {
        
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_PRODUCT_TABLE,
            modelName: 'OrderProduct',
            timestamps: false,
        };
    }
}

const OrderProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    orderId: {
        field: 'order_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: ORDER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    productId: {
        field: 'product_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: PRODUCCT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        field: 'created_at',
    },
    updateAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        field: 'update_at',
    },
};

module.exports = { ORDER_PRODUCT_TABLE, OrderProductSchema, OrderProduct };
