const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const MenuItem = require('./models/menuItems');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Test Data Creation
const testItem = new MenuItem({
  name: 'Test Burger', 
  description: 'Delicious burger with all the fixings',
  price: 12.99,
  category: 'Lunch & Dinner'
});

testItem.save()
  .then(() => console.log('Test item saved!'))
  .catch(err => console.error('Error saving item:', err));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});