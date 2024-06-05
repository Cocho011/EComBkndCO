// Import the Express.js library.
const express = require('express');

// Import the routes defined in the routes directory.
const routes = require('./routes');

// Import the Sequelize instance configured for database connection.
const sequelize = require('./config/connection');

// Initialize an Express application.
const app = express();

// Define the port number. Use the port specified in the environment variables or default to 3001.
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming JSON requests.
app.use(express.json());

// Middleware to parse incoming URL-encoded data.
app.use(express.urlencoded({ extended: true }));

// Use the imported routes for handling API requests.
app.use(routes);

// Sync the Sequelize models with the database, then start the server.
// If `force: true`, it will drop and re-create the tables on every sync (useful for development).
sequelize.sync({ force: false }).then(() => {
  // Start the server and listen for requests on the specified port.
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
