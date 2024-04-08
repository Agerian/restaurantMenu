import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import MenuItemModal from './MenuItemModal';
import { GET_ALL_MENU_ITEMS } from '../utils/queries';
import { ADD_MENU_ITEM, UPDATE_MENU_ITEM, DELETE_MENU_ITEM } from '../utils/mutations';
import './MIM.css'; // Import CSS file for styling

function MIM() {
  const { loading, error, data, refetch } = useQuery(GET_ALL_MENU_ITEMS);
  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM, {
    onCompleted: () => refetch(), // Refetch menu items list after deleting
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null); // null for add, object for edit

  const handleOpenModal = (item) => {
    setCurrentItem(item); // Pass the item to edit or null for a new item
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentItem(null); // Reset current item on close
  };

  const handleDeleteMenuItem = async (itemId) => {
    await deleteMenuItem({ variables: { _id: itemId } });
  };

  if (loading) return <p>Loading menu items...</p>;
  if (error) return <p>Error loading menu items!</p>;

  return (
    <div className="menu-container">
      <h2 className="menu-heading">Menu Item Management</h2>
      <button className="add-button" onClick={() => handleOpenModal(null)}>Add New Menu Item</button>
      
      <ul className="menu-list">
        {data.getAllMenuItems.map((item) => (
          <li key={item._id} className="menu-item">
            <div>
              <span className="item-name">{item.name}</span> - <span className="item-description">{item.description}</span> - <span className="item-price">${item.price}</span> - 
              {item.category && <span className="item-category">{item.category.name}</span>} {/* Adjusted this line */}
              {/* Conditionally render the new fields if they exist */}
              {item.vineyard && <div className="item-field">Vineyard: {item.vineyard}</div>}
              {item.region && <div className="item-field">Region: {item.region}</div>}
              {item.tastingNotes && <div className="item-field">Tasting Notes: {item.tastingNotes}</div>}
            </div>
            <button className="edit-button" onClick={() => handleOpenModal(item)}>Edit</button>
            <button className="delete-button" onClick={() => handleDeleteMenuItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      {modalOpen && (
        <MenuItemModal
          item={currentItem}
          onClose={handleCloseModal}
          refetch={refetch}
        />
      )}
    </div>
  );
}

export default MIM;