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
      category
    }
  }
`;

const MenuPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_MENU_ITEMS);
  const [categorizedItems, setCategorizedItems] = useState({});

  useEffect(() => {
    if (data) {
      const itemsByCategory = data.getAllMenuItems.reduce((acc, item) => {
        const { category } = item;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(item);
        return acc;
      }, {});
      
      setCategorizedItems(itemsByCategory);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading menu items.</p>;

  return (
    <div className="menu-container">
      {Object.keys(categorizedItems).map(category => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-items">
            {categorizedItems[category].map(item => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
