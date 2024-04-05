import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MENU_ITEM, UPDATE_MENU_ITEM } from '../utils/mutations';
import './MenuItemModal.css';

const MenuItemModal = ({ item, onClose, refetch }) => {
  const isEditMode = !!item;
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    vineyard: '',
    region: '',
    tastingNotes: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        vineyard: item.vineyard || '',
        region: item.region || '',
        tastingNotes: item.tastingNotes || '',
      });
    }
  }, [item, isEditMode]);

  const [addMenuItem] = useMutation(ADD_MENU_ITEM, {
    onCompleted: () => {
      refetch();
      onClose();
    },
  });

  const [updateMenuItem] = useMutation(UPDATE_MENU_ITEM, {
    onCompleted: () => {
      refetch();
      onClose();
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors for a field when it's changed
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: null}));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Basic validation: Check for empty required fields
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.category) newErrors.category = 'Category is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before proceeding
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    const input = { ...formData, price: parseFloat(formData.price) };

    if (isEditMode) {
      await updateMenuItem({
        variables: { _id: item._id, input },
      });
    } else {
      await addMenuItem({
        variables: { input },
      });
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
         {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        {errors.price && <div style={{ color: 'red' }}>{errors.price}</div>}

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        {errors.category && <div style={{ color: 'red' }}>{errors.category}</div>}

        <input
        type="text"
        name="vineyard"
        placeholder="WINE - Vineyard"
        value={formData.vineyard}
        onChange={handleChange}
        />
        <input
          type="text"
          name="region"
          placeholder="WINE - Region"
          value={formData.region}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tastingNotes"
          placeholder="WINE - Tasting Notes"
          value={formData.tastingNotes}
          onChange={handleChange}
        />
        <button type="submit">{isEditMode ? 'Update' : 'Add'} Menu Item</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default MenuItemModal;
