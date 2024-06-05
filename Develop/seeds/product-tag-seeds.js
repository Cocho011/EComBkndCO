// Import the ProductTag model from the models directory.
const { ProductTag } = require('../models');

// Define an array of product-tag data to seed the database.
// Each object represents a relationship between a product and a tag.
const productTagData = [
  {
    product_id: 1, // Refers to the product with ID 1
    tag_id: 6,     // Refers to the tag with ID 6
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

// Function to bulk create product-tag relationships using the defined productTagData.
const seedProductTags = () => ProductTag.bulkCreate(productTagData);

// Export the function to use it in other parts of the application.
module.exports = seedProductTags;
