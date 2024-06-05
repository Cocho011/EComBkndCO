// Import the Category model from the models directory.
const { Category } = require('../models');

// Define an array of category data to seed the database.
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Function to bulk create categories using the defined category data.
const seedCategories = () => Category.bulkCreate(categoryData);

// Export the function to use it in other parts of the application.
module.exports = seedCategories;
