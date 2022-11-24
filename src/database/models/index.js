const { User, UserSchema } = require('./user.model');
const {Customer, CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');

function setupModels(sequalize) {
  User.init(UserSchema, User.config(sequalize));
  Customer.init(CustomerSchema, Customer.config(sequalize));
  Category.init(CategorySchema, Category.config(sequalize));
  Product.init(ProductSchema, Product.config(sequalize));
  Order.init(OrderSchema, Order.config(sequalize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequalize));

  Customer.associate(sequalize.models);
  Product.associate(sequalize.models);
  Category.associate(sequalize.models);
  Order.associate(sequalize.models);
}

module.exports = setupModels;
