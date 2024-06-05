# E-Commerce Backend

## Description 

This project is a backend for an e-commerce site, built using Node.js, Express.js, Sequelize, and MySQL. The application provides API endpoints to manage categories, products, and tags in an e-commerce platform.

## Walkthrough Video URL

https://drive.google.com/file/d/1pJLYlFgi3of3aB_tOnm8CW8-hEDACi7W/view?usp=sharing


## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Seeding the Database](#seeding-the-database)
- [File Structure](#file-structure)
- [Collaboration Guidelines](#collaboration-guidelines)
- [License](#license)
- [Questions](#questions)

##
- Javascript
- Node.js
- Sequelize
- MySQL2
- Express
- Dotenv

## Installation

1. Clone the repository to your local machine
2. Navigate to the project directory
3. Install the required dependencies using npm install
4. Create a .env file in the root of your project and add the necessary environment variables
5. Set up the database using MySQL

## Usage

1. Start server by running: npm start
2. For development mode (with automatic restarts) run: npm run dev
3. Check if server is running on: http://localhost:3001

## API Routes

Categories: 

- GET /api/categories - Get all categories
- GET /api/categories/:id - Get a single category by its id
- POST /api/categories - Create a new category
- PUT /api/categories/:id - Update a category by its id
- DELETE /api/categories/:id - Delete a category by its id

Products:

- GET /api/products - Get all products
- GET /api/products/:id - Get a single product by its id
- POST /api/products - Create a new product
- PUT /api/products/:id - Update a product by its id
- DELETE /api/products/:id - Delete a product by its id

Tags:

- ET /api/tags - Get all tags
- GET /api/tags/:id - Get a single tag by its id
- POST /api/tags - Create a new tag
- PUT /api/tags/:id - Update a tag by its id
- DELETE /api/tags/:id - Delete a tag by its id

### Screenshot of Insomnia API Structure

The below screenshot showcases the API structure and application running:

![alt text](<assets/Insomnia API structure .png>)

## Seeding the Database

1. Ensure your database is set up and that a '.env'file is configured
2. Run the seed command: npm run seed

## File Structure 

e-commerce-backend/
└── Develop
    ├── config/
    │   └── connection.js
    │
    ├── controllers/
    │   ├── categoryController.js
    │   ├── productController.js
    │   └── tagController.js
    │
    ├── models/
    │   ├── Category.js
    │   ├── Product.js
    │   ├── ProductTag.js
    │   ├── Tag.js
    │   └── index.js
    │
    ├── routes/
    │   ├── api/
    │   │   ├── category-routes.js
    │   │   ├── index.js
    │   │   ├── product-routes.js
    │   │   └── tag-routes.js
    │   └── index.js
    │
    ├── seeds/
    │   ├── category-seeds.js
    │   ├── index.js
    │   ├── product-seeds.js
    │   ├── product-tag-seeds.js
    │   └── tag-seeds.js
    │
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js


### Comments on the File Structure

1. **config/connection.js**: Contains the Sequelize connection configuration.
2. **controllers/**: Contains controllers for handling the business logic of each model.
   - **categoryController.js**: Handles logic for categories.
   - **productController.js**: Handles logic for products.
   - **tagController.js**: Handles logic for tags.
3. **models/**: Contains model definitions for Sequelize.
   - **Category.js**: Defines the category model.
   - **Product.js**: Defines the product model.
   - **ProductTag.js**: Defines the product-tag model.
   - **Tag.js**: Defines the tag model.
   - **index.js**: Initializes and associates the models.
4. **routes/api/**: Contains API route definitions.
   - **category-routes.js**: Routes for categories.
   - **product-routes.js**: Routes for products.
   - **tag-routes.js**: Routes for tags.
   - **index.js**: Combines all API routes.
5. **routes/index.js**: Combines all routes.
6. **seeds/**: Contains seeding scripts for populating the database with initial data.
   - **category-seeds.js**: Seeds categories.
   - **index.js**: Runs all seed scripts.
   - **product-seeds.js**: Seeds products.
   - **product-tag-seeds.js**: Seeds product-tag relationships.
   - **tag-seeds.js**: Seeds tags.
7. **.env**: Contains environment variables.
8. **.gitignore**: Specifies files to ignore in version control.
9. **package.json**: Lists project dependencies and scripts.
10. **README.md**: Documentation for the project.
11. **server.js**: The main entry point for the server.

## Collaboration Guidelines

1. Clone starter code
2. Submit a pull request (new features will be merged once they are reviewed and approved)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>
This repository is licensed under the MIT license.

## Questions

For questions or concerns about this project, please contact: Carolina Ochoa

Email:cocho011@fiu.edu
GitHub Username: Cocho011
GitHub Profile: https://github.com/Cocho011