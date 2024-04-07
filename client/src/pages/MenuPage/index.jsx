import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import MenuItem from '../MenuItem';

const GET_ALL_MENU_ITEMS = gql`
  query GetAllMenuItems {
    getAllMenuItems {
      _id
      name
      description
      price
      category {
        _id
        name
      }
      vineyard
      region
      tastingNotes
    }
  }
`;

const categorySubcategories = {
  "Breakfast": [
    "Breakfast",
    "Breakfast - Egg Omelettes or Tofu Scrambles", 
    "Breakfast - I ♥ Potatoes", 
    "Breakfast - Pozole", 
    "Breakfast - Sides"
  ],
  "Cafe": [
    "Burgers", 
    "Salads", 
    "Sandwiches", 
    "Sides"
  ],
  "Specialties": [
    "Specialties - I ♥ Seafood", 
    "Specialties - On the Side"
  ],
  "Beverages": [
    "Beverages - Cold", 
    "Beverages - Hot or Iced", 
    "Beverages - To Go"
  ],
  "Desserts": [],
  "Wine": [
    "Wine - White - Bottle", 
    "Wine - Sparkling - Bottle", 
    "Wine - Red - Bottle", 
    "Wine - Rosé - Bottle", 
    "Wine - Skin-Contact - Bottle", 
    "Wine - White - By The Glass", 
    "Wine - Sparkling - By The Glass", 
    "Wine - Red - By The Glass", 
    "Wine - Rosé - By The Glass", 
    "Wine - House White - By The Glass", 
    "Wine - House Red - By The Glass", 
    "Wine - House Sparkling - By The Glass"
  ],
  "Beer": [
    "Beer - Stout & Porter", 
    "Beer - Sour", 
    "Beer - IPA", 
    "Beer - Lager", 
    "Beer - Ale", 
    "Beer - Cider", 
    "Beer - Pilsner", 
    "Beer - Draft"
  ],
  "Spirits": [
    "Spirits - Vodka", 
    "Spirits - Gin & Genever", 
    "Spirits - Tequila", 
    "Spirits - Mezcal", 
    "Spirits - Sotol", 
    "Spirits - Brandy", 
    "Spirits - Absinthe", 
    "Spirits - Aperitif & Digestif", 
    "Spirits - Whiskey", 
    "Spirits - Rye", 
    "Spirits - Scotch", 
    "Spirits - Rum"
  ],
  "Cocktails": [
    "Cocktails - Classics", 
    "Cocktails - Boozy Coffee", 
    "Cocktails - N/A"
  ],
  // Add any additional categories or subcategories here
};

// You can then derive categoryOrder from this mapping
const MenuPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_MENU_ITEMS);
  const [categorizedItems, setCategorizedItems] = useState({});
  const [activeSubcategories, setActiveSubcategories] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    if (data) {
      const itemsByCategory = {};
      data.getAllMenuItems.forEach(item => {
        const category = item.category.name;
        if (!itemsByCategory[category]) {
          itemsByCategory[category] = [];
        }
        itemsByCategory[category].push(item);
      });
      setCategorizedItems(itemsByCategory);
    }
  }, [data]);

  const handleSubcategoryChange = (category, subcategory) => {
    setActiveSubcategories(prev => ({ ...prev, [category]: subcategory }));
  };

  const toggleCategory = (category) => {
    setExpandedCategory(prev => (prev === category ? null : category));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading menu items.</p>;

  return (
    <div className="menu-container">
      {Object.keys(categorySubcategories).map((category) => (
        <div key={category} className="menu-category">
          <h2 onClick={() => toggleCategory(category)}>{category}</h2>
          {expandedCategory === category && (
            <div>
              {categorySubcategories[category].length > 0 ? (
                categorySubcategories[category].map(subcategory => (
                  <div key={subcategory}>
                    <button
                      onClick={() => handleSubcategoryChange(category, subcategory)}
                      className={activeSubcategories[category] === subcategory ? 'active' : ''}
                    >
                      {subcategory}
                    </button>
                  </div>
                ))
              ) : null}
              <div className="menu-items">
                {(activeSubcategories[category] === 'All' || !activeSubcategories[category] ? Object.values(categorizedItems).flat() : categorizedItems[activeSubcategories[category]] || [])
                  .filter(item => item.category.name.startsWith(category))
                  .map(item => (
                    <MenuItem key={item._id} item={item} />
                  ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuPage;