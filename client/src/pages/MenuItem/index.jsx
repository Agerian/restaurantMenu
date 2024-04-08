import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  const { name, description, price, vineyard, region, tastingNotes } = item;

  return (
    <div className="menu-item">
      <div className="menu-item-details">
        <h3 className="menu-item-name">{name}</h3>
        {vineyard && <p className="menu-item-vineyard">{vineyard}</p>}
        {region && <p className="menu-item-region">{region}</p>}
        <p className="menu-item-description">{description}</p>
        {tastingNotes && <p className="menu-item-tasting-notes">{tastingNotes}</p>}
      </div>
      <p className="menu-item-price">${price.toFixed(2)}</p> {/* Formatting price to two decimal places */}
    </div>
  );
};

export default MenuItem;
