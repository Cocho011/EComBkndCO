const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }]
    });

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categories = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categories) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(categories);
    }
  } catch (err) {
    res.status(500).json(err);
  }});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then((category) => {
      res.status(201).json(category);
    })
    .catch((err) => {
      res.status(500).json(err);
    })});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
      req.body,
    {
      where: {
        id: req.params.id
    }})
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      res.status(500).json(err);
    })});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
    }});

    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(category);
    }
  } catch (err) {
    res.status(500).json(err);
  }});

module.exports = router;