const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');

const PRODUCCT_TABLE = 'products';

class Product extends Model {
    static associate(models) {
        this.belongsTo(models.Category, {
            as: 'category'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCCT_TABLE,
            modelName: 'Product',
            timestamps: false,
        };
    }
}

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoryId: {
        field: 'category_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: CATEGORY_TABLE,
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

module.exports = { PRODUCCT_TABLE, ProductSchema, Product };
