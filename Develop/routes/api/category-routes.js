// Import the Express router and the necessary models.
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
// This endpoint retrieves all categories from the database,
// including any associated products.
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categories); // Send the categories as a JSON response with a 200 OK status.
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// GET one category by its `id` value
// This endpoint retrieves a single category by its ID from the database,
// including any associated products.
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' }); // Send a 404 Not Found status if the category does not exist.
    }
    res.status(200).json(category); // Send the category as a JSON response with a 200 OK status.
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// CREATE a new category
// This endpoint creates a new category in the database.
router.post('/', async (req, res) => {
  try {
    const category = await Category.create({
      category_name: req.body.category_name
    });
    res.status(201).json(category); // Send the created category as a JSON response with a 201 Created status.
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// UPDATE a category by its `id` value
// This endpoint updates a category's information in the database by its ID.
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (updated) {
      const updatedCategory = await Category.findByPk(req.params.id);
      return res.status(200).json(updatedCategory); // Send the updated category as a JSON response with a 200 OK status.
    }
    throw new Error('Category not found');
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// DELETE a category by its `id` value
// This endpoint deletes a category from the database by its ID.
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Category not found' }); // Send a 404 Not Found status if the category does not exist.
    }
    res.status(200).json({ message: 'Category deleted' }); // Send a confirmation message with a 200 OK status.
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// Export the router so it can be used in other parts of the application.
module.exports = router;
