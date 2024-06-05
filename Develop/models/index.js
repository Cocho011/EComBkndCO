// Import the Product model from the 'Product' file.
const Product = require('./Product');

// Import the Category model from the 'Category' file.
const Category = require('./Category');

// Import the Tag model from the 'Tag' file.
const Tag = require('./Tag');

// Import the ProductTag model from the 'ProductTag' file.
const ProductTag = require('./ProductTag');

// Define associations between models to represent their relationships.

// A Product belongs to a Category.
// This adds a foreign key 'category_id' to the Product model.
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// A Category can have many Products.
// This adds a foreign key 'category_id' to the Product model.
// When a Category is deleted, set the 'category_id' in associated Products to null.
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

// A Product can have many Tags through the ProductTag model.
// This creates a many-to-many relationship between Product and Tag.
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// A Tag can have many Products through the ProductTag model.
// This creates a many-to-many relationship between Tag and Product.
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// Export all models so they can be used in other parts of the application.
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
