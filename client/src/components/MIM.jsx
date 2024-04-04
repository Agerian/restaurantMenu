import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_MENU_ITEMS } from '../utils/queries';
import { ADD_MENU_ITEM, UPDATE_MENU_ITEM, DELETE_MENU_ITEM } from '../utils/mutations';

function MIM() {
  const { loading, error, data, refetch } = useQuery(GET_ALL_MENU_ITEMS);
  const [addMenuItem] = useMutation(ADD_MENU_ITEM, {
    onCompleted: () => refetch(), // Refetch menu items list after adding
  });
  const [updateMenuItem] = useMutation(UPDATE_MENU_ITEM, {
    onCompleted: () => refetch(), // Refetch menu items list after updating
  });
  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM, {
    onCompleted: () => refetch(), // Refetch menu items list after deleting
  });

  // State for form fields (assuming a simple add form here for example)
  const [newMenuItem, setNewMenuItem] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    vineyard: '',
    region: '',
    tastingNotes: '',
  });

  const handleAddMenuItem = async () => {
    try {
      await addMenuItem({
        variables: {
          input: newMenuItem,
        },
      });
      // Reset form
      setNewMenuItem({
        name: '',
        description: '',
        price: 0,
        category: '',
        vineyard: '',
        region: '',
        tastingNotes: '',
      });
    } catch (err) {
      console.error("Error adding menu item:", err);
    }
  };

  const handleDeleteMenuItem = async (itemId) => {
    try {
      await deleteMenuItem({
        variables: {
          _id: itemId,
        },
      });
    } catch (err) {
      console.error("Error deleting menu item:", err);
    }
  };

  if (loading) return <p>Loading menu items...</p>;
  if (error) return <p>Error loading menu items!</p>;

  return (
    <div>
      <h2>Menu Item Management</h2>
      {/* Add Menu Item Form */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newMenuItem.name}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMenuItem.description}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newMenuItem.price}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, price: parseFloat(e.target.value) })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newMenuItem.category}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, category: e.target.value })}
        />
        
        <button onClick={handleAddMenuItem}>Add Menu Item</button>
      </div>
      {/* List of Menu Items */}
      <ul>
        {data.getAllMenuItems.map((item) => (
          <li key={item._id}>
            {item.name} - {item.description} - ${item.price} - {item.category}
            <button onClick={() => handleDeleteMenuItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MIM;