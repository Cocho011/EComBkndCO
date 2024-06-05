// Import the Express router.
const router = require('express').Router();

// Import the category, product, and tag routes.
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Use the category routes for any requests to `/api/categories`.
router.use('/categories', categoryRoutes);

// Use the product routes for any requests to `/api/products`.
router.use('/products', productRoutes);

// Use the tag routes for any requests to `/api/tags`.
router.use('/tags', tagRoutes);

// Export the router to be used in other parts of the application.
module.exports = router;
