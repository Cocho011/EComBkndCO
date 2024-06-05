// Import the configured Sequelize instance.
const sequelize = require('../config/connection');

// Import the functions to seed categories, products, tags, and product tags.
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// Function to seed all data in sequence.
const seedAll = async () => {
  // Sync the database and force dropping/recreating tables.
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // Seed categories.
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  // Seed products.
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  // Seed tags.
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  // Seed product tags to establish relationships between products and tags.
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  // Exit the process once all seeding is done.
  process.exit(0);
};

// Call the function to seed all data.
seedAll();
