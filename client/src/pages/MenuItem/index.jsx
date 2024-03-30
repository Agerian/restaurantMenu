import React from 'react';

// Assuming `item` is passed with all the necessary details
const MenuItem = ({ item }) => {
  const { name, description, price } = item;

  return (
    <div className="menu-item">
      <h3 className="menu-item-name">{name}</h3>
      <p className="menu-item-description">{description}</p>
      <p className="menu-item-price">${price.toFixed(2)}</p> {/* Formatting price to two decimal places */}
    </div>
  );
};

export default MenuItem;
