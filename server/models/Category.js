const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensure all categories have a unique name
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
