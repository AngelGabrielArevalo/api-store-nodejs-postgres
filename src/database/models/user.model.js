const {Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE = 'users';

class User extends Model {
    static associate () {}

    static config (sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false,
            defaultScope: {
                attributes: { exclude: ['password'] },
            },
            scopes: {
                withPassword: {
                    attributes: { },
                }
            }
        }
    }
}

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    }, 
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'CUSTOMER'
    },
    createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    updateAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
    }
}

module.exports = { USER_TABLE, UserSchema, User};