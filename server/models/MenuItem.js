const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  vineyard: String,
  region: String,
  tastingNotes: String
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
