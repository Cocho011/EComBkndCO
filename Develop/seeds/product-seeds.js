// Import the Product model from the models directory.
const { Product } = require('../models');

// Define an array of product data to seed the database.
const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1, // Refers to the category with ID 1
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5, // Refers to the category with ID 5
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4, // Refers to the category with ID 4
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3, // Refers to the category with ID 3
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2, // Refers to the category with ID 2
  },
];

// Function to bulk create products using the defined product data.
const seedProducts = () => Product.bulkCreate(productData);

// Export the function to use it in other parts of the application.
module.exports = seedProducts;
