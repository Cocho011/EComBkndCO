// Import the Tag model from the models directory.
const { Tag } = require('../models');

// Define an array of tag data to seed the database.
// Each object represents a tag with a name.
const tagData = [
  {
    tag_name: 'rock music', // Tag for rock music
  },
  {
    tag_name: 'pop music', // Tag for pop music
  },
  {
    tag_name: 'blue', // Tag for the color blue
  },
  {
    tag_name: 'red', // Tag for the color red
  },
  {
    tag_name: 'green', // Tag for the color green
  },
  {
    tag_name: 'white', // Tag for the color white
  },
  {
    tag_name: 'gold', // Tag for the color gold
  },
  {
    tag_name: 'pop culture', // Tag for pop culture
  },
];

// Function to bulk create tags using the defined tag data.
const seedTags = () => Tag.bulkCreate(tagData);

// Export the function to use it in other parts of the application.
module.exports = seedTags;
