// Import the necessary parts of the Sequelize library.
const { Model, DataTypes } = require('sequelize');

// Import the configured Sequelize instance.
const sequelize = require('../config/connection');

// Define a new class 'Product' that extends the Sequelize 'Model' class.
class Product extends Model {}

// Initialize the 'Product' model with its schema and configuration options.
Product.init(
  {
    // Define the 'id' field.
    id: {
      // The data type of 'id' is INTEGER.
      type: DataTypes.INTEGER,
      // 'id' cannot be null.
      allowNull: false,
      // 'id' is the primary key for this model.
      primaryKey: true,
      // 'id' will auto-increment, meaning it will automatically get a new value for each new record.
      autoIncrement: true,
    },
    // Define the 'product_name' field.
    product_name: {
      // The data type of 'product_name' is STRING.
      type: DataTypes.STRING,
      // 'product_name' cannot be null.
      allowNull: false,
    },
    // Define the 'price' field.
    price: {
      // The data type of 'price' is DECIMAL.
      type: DataTypes.DECIMAL,
      // 'price' cannot be null.
      allowNull: false,
      // 'price' must be a decimal value.
      validate: {
        isDecimal: true,
      },
    },
    // Define the 'stock' field.
    stock: {
      // The data type of 'stock' is INTEGER.
      type: DataTypes.INTEGER,
      // 'stock' cannot be null.
      allowNull: false,
      // 'stock' will have a default value of 10.
      defaultValue: 10,
      // 'stock' must be a numeric value.
      validate: {
        isNumeric: true,
      },
    },
    // Define the 'category_id' field.
    category_id: {
      // The data type of 'category_id' is INTEGER.
      type: DataTypes.INTEGER,
      // 'category_id' references the 'id' field in the 'category' model.
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    // Pass the Sequelize instance.
    sequelize,
    // Disable automatic timestamps (createdAt, updatedAt).
    timestamps: false,
    // Ensure the table name matches the model name.
    freezeTableName: true,
    // Use snake_case for automatically added attributes (e.g., foreign keys).
    underscored: true,
    // Set the model name to 'product'.
    modelName: 'product',
  }
);

// Export the 'Product' model for use in other parts of the application.
module.exports = Product;
