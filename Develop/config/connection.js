// Load environment variables from the .env file
require('dotenv').config();

// Import the Sequelize library for database connection and ORM
const Sequelize = require('sequelize');

// Create a new Sequelize instance to connect to the database
// Check if JAWSDB_URL environment variable is set (for production environment on Heroku)
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // Use JAWSDB_URL for connection if available
  : new Sequelize( // Otherwise, use the environment variables for local MySQL database connection
      process.env.DB_NAME, // Database name from the environment variables
      process.env.DB_USER, // Database user from the environment variables
      process.env.DB_PASSWORD, // Database password from the environment variables
      {
        host: 'localhost', // Database server host (localhost for local development)
        dialect: 'mysql', // Specify that we are using MySQL
        dialectOptions: {
          decimalNumbers: true, // Ensure that decimal numbers are correctly parsed
        },
      }
    );

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;
