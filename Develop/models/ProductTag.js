// Import the necessary parts of the Sequelize library.
const { Model, DataTypes } = require('sequelize');

// Import the configured Sequelize instance.
const sequelize = require('../config/connection');

// Define a new class 'ProductTag' that extends the Sequelize 'Model' class.
class ProductTag extends Model {}

// Initialize the 'ProductTag' model with its schema and configuration options.
ProductTag.init(
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
    // Define the 'product_id' field.
    product_id: {
      // The data type of 'product_id' is INTEGER.
      type: DataTypes.INTEGER,
      // 'product_id' references the 'id' field in the 'product' model.
      references: {
        model: 'product',
        key: 'id',
      },
    },
    // Define the 'tag_id' field.
    tag_id: {
      // The data type of 'tag_id' is INTEGER.
      type: DataTypes.INTEGER,
      // 'tag_id' references the 'id' field in the 'tag' model.
      references: {
        model: 'tag',
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
    // Set the model name to 'product_tag'.
    modelName: 'product_tag',
  }
);

// Export the 'ProductTag' model for use in other parts of the application.
module.exports = ProductTag;
