const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create({
      category_name: req.body.category_name
    });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (updated) {
      const updatedCategory = await Category.findByPk(req.params.id);
      return res.status(200).json(updatedCategory);
    }
    throw new Error('Category not found');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
