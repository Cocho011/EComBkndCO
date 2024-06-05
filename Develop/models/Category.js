// Import the necessary parts of Sequelize library.
const { Model, DataTypes } = require('sequelize');

// Import the configured Sequelize instance.
const sequelize = require('../config/connection.js');

// Define a new class 'Category' that extends the Sequelize 'Model' class.
class Category extends Model {}

// Initialize the 'Category' model with its schema and configuration options.
Category.init(
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
    // Define the 'category_name' field.
    category_name: {
      // The data type of 'category_name' is STRING.
      type: DataTypes.STRING,
      // 'category_name' cannot be null.
      allowNull: false,
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
    // Set the model name to 'category'.
    modelName: 'category',
  }
);

// Export the 'Category' model for use in other parts of the application.
module.exports = Category;
