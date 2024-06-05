// Import the Express router.
const router = require('express').Router();

// Import the API routes.
const apiRoutes = require('./api');

// Use the API routes for any requests to `/api`.
router.use('/api', apiRoutes);

// Default response for any other request (not found).
// This sends a simple message indicating that the route is incorrect.
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

// Export the router to be used in other parts of the application.
module.exports = router;
