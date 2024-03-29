import React, { useState, useEffect } from 'react';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('/api/menu-items')
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Our Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>{item.name} =${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;