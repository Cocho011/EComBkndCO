// Import the necessary parts of the Sequelize library.
const { Model, DataTypes } = require('sequelize');

// Import the configured Sequelize instance.
const sequelize = require('../config/connection.js');

// Define a new class 'Tag' that extends the Sequelize 'Model' class.
class Tag extends Model {}

// Initialize the 'Tag' model with its schema and configuration options.
Tag.init(
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
    // Define the 'tag_name' field.
    tag_name: {
      // The data type of 'tag_name' is STRING.
      type: DataTypes.STRING,
      // 'tag_name' can be null, allowing tags without names.
      allowNull: true,
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
    // Set the model name to 'tag'.
    modelName: 'tag',
  }
);

// Export the 'Tag' model for use in other parts of the application.
module.exports = Tag;
