// Import the Express router.
const router = require('express').Router();
// Import the necessary models.
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// GET all products
// This endpoint retrieves all products from the database,
// including their associated categories and tags.
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(products); // Send the products as a JSON response with a 200 OK status.
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// GET one product by its `id` value
// This endpoint retrieves a single product by its ID from the database,
// including its associated categories and tags.
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });

    if (!product) {
      res.status(404).json({ message: 'Product not found' }); // Send a 404 Not Found status if the product does not exist.
    } else {
      res.status(200).json(product); // Send the product as a JSON response with a 200 OK status.
    }
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// CREATE a new product
// This endpoint creates a new product in the database.
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    // If there are associated tags, create those relationships in the ProductTag table.
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(200).json(product); // Send the created product as a JSON response with a 200 OK status.
  } catch (err) {
    console.log(err);
    res.status(400).json(err); // Send a 400 Bad Request status if something goes wrong.
  }
});

// UPDATE a product by its `id` value
// This endpoint updates a product's information in the database by its ID.
router.put('/:id', async (req, res) => {
  try {
    // Update the product data
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      // Find all associated tags from ProductTag
      const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });

      // Get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);

      // Create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      // Figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // Run both actions
      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);

      const updatedProduct = await Product.findByPk(req.params.id, {
        include: [{ model: Category }, { model: Tag }],
      });
      return res.status(200).json(updatedProduct); // Send the updated product as a JSON response with a 200 OK status.
    }
    throw new Error('Product not found');
  } catch (err) {
    console.error(err);
    res.status(400).json(err); // Send a 400 Bad Request status if something goes wrong.
  }
});

// DELETE a product by its `id` value
// This endpoint deletes a product from the database by its ID.
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!product) {
      res.status(404).json({ message: 'Product not found' }); // Send a 404 Not Found status if the product does not exist.
    } else {
      res.status(200).json({ message: 'Product deleted' }); // Send a confirmation message with a 200 OK status.
    }
  } catch (err) {
    res.status(500).json(err); // Send a 500 Internal Server Error status if something goes wrong.
  }
});

// Export the router so it can be used in other parts of the application.
module.exports = router;
