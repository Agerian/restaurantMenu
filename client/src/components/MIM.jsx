import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import RemoveProfile from './RemoveProfile';
import MenuItemModal from './MenuItemModal';
import { GET_ALL_MENU_ITEMS } from '../utils/queries';
import { ADD_MENU_ITEM, UPDATE_MENU_ITEM, DELETE_MENU_ITEM } from '../utils/mutations';

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
    <div>
      <h2>Menu Item Management</h2>
      <button onClick={() => handleOpenModal(null)}>Add New Menu Item</button>
      
      <ul>
  {data.getAllMenuItems.map((item) => (
    <li key={item._id}>
      {item.name} - {item.description} - ${item.price} - 
      {item.category && item.category.name} {/* Adjusted this line */}
      {/* Conditionally render the new fields if they exist */}
      {item.vineyard && <div>Vineyard: {item.vineyard}</div>}
      {item.region && <div>Region: {item.region}</div>}
      {item.tastingNotes && <div>Tasting Notes: {item.tastingNotes}</div>}
      <button onClick={() => handleOpenModal(item)}>Edit</button>
      <button onClick={() => handleDeleteMenuItem(item._id)}>Delete</button>
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