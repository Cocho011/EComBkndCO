// Import the Express router and the necessary models.
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
// This endpoint retrieves all tags from the database, 
// including associated products through the ProductTag model.
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tags); // Send the tags as a JSON response with a 200 OK status.
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// GET one tag by its `id` value
// This endpoint retrieves a single tag by its ID from the database,
// including associated products.
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' }); // Send a 404 Not Found status if the tag does not exist.
    }
    res.status(200).json(tag); // Send the tag as a JSON response with a 200 OK status.
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// CREATE a new tag
// This endpoint creates a new tag in the database.
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(201).json(tag); // Send the created tag as a JSON response with a 201 Created status.
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// UPDATE a tag's name by its `id` value
// This endpoint updates a tag's information in the database by its ID.
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updated) {
      const updatedTag = await Tag.findByPk(req.params.id);
      return res.status(200).json(updatedTag); // Send the updated tag as a JSON response with a 200 OK status.
    }
    throw new Error('Tag not found');
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// DELETE a tag by its `id` value
// This endpoint deletes a tag from the database by its ID.
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Tag not found' }); // Send a 404 Not Found status if the tag does not exist.
    }
    res.status(200).json({ message: 'Tag deleted' }); // Send a confirmation message with a 200 OK status.
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// Export the router so it can be used in other parts of the application.
module.exports = router;
