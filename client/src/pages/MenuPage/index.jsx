import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import MenuItem from '../MenuItem';
import './MenuPage.css';

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
    "Breakfast - Breakfast",
    "Breakfast - Egg Omelettes or Tofu Scrambles", 
    "Breakfast - I ♥ Potatoes", 
    "Breakfast - Pozole", 
    "Breakfast - Sides"
  ],
  "Cafe": [
    "Cafe - Burgers", 
    "Cafe - Salads", 
    "Cafe - Sandwiches", 
    "Cafe - Sides"
  ],
  "Specialties": [
    "Specialties - Specialties",
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
    "Cocktails - Cocktails",
    "Cocktails - Classics", 
    "Cocktails - Boozy Coffee", 
    "Cocktails - N/A"
  ],
  // Add any additional categories or subcategories here
};

const MenuPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_MENU_ITEMS);
  const [categorizedItems, setCategorizedItems] = useState({});
  const [activeSubcategories, setActiveSubcategories] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    if (data) {
      const tempCategorizedItems = {};

      // Initialize categories and subcategories
      Object.entries(categorySubcategories).forEach(([mainCategory, subcategories]) => {
        tempCategorizedItems[mainCategory] = []; // Initialize main category
        subcategories.forEach(subcategory => {
          tempCategorizedItems[subcategory] = []; // Initialize subcategories
        });
      });

      data.getAllMenuItems.forEach(item => {
        const { name } = item.category;
        // Assign item to its direct category or subcategory
        if (tempCategorizedItems.hasOwnProperty(name)) {
          tempCategorizedItems[name].push(item);
        }
      });

      setCategorizedItems(tempCategorizedItems);
    }
  }, [data]);

  const handleSubcategoryChange = (mainCategory, subcategory) => {
    setActiveSubcategories(prev => ({ ...prev, [mainCategory]: subcategory }));
  };

  const toggleCategory = (category) => {
    setExpandedCategory(prev => (prev === category ? null : category));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading menu items.</p>;

  return (
    <div className="menu-container">
      {Object.keys(categorySubcategories).map(mainCategory => (
        <div key={mainCategory} className="menu-category">
          <h2 onClick={() => toggleCategory(mainCategory)}>{mainCategory}</h2>
          {expandedCategory === mainCategory && (
            <>
              <div className="subcategory-tabs">
                {categorySubcategories[mainCategory].map(subcategory => (
                  <button
                    key={subcategory}
                    onClick={() => handleSubcategoryChange(mainCategory, subcategory)}
                    className={activeSubcategories[mainCategory] === subcategory ? 'active' : ''}
                  >
                    {subcategory.replace(mainCategory + ' - ', '')}
                  </button>
                ))}
              </div>
              <div className="menu-items">
                {categorizedItems[activeSubcategories[mainCategory] || mainCategory]?.map(item => (
                  <MenuItem key={item._id} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuPage;