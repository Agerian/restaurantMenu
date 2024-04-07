import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_MENU_ITEM, UPDATE_MENU_ITEM } from "../utils/mutations";
import { GET_ALL_MENU_ITEMS, GET_CATEGORIES } from "../utils/queries";
import "./MenuItemModal.css";

const MenuItemModal = ({ item, onClose, refetch }) => {
  const isEditMode = !!item;
  const { loading: loadingCategories, data: categoriesData } =
    useQuery(GET_CATEGORIES);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    vineyard: "",
    region: "",
    tastingNotes: "",
  });

  const [errors, setErrors] = useState({});

  // Load item data into form for editing
  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category._id, // Ensure you're using the category ID
        vineyard: item.vineyard || "",
        region: item.region || "",
        tastingNotes: item.tastingNotes || "",
      });
    }
  }, [item, isEditMode]);

  const [addMenuItem] = useMutation(ADD_MENU_ITEM, {
    onCompleted: () => {
      // refetch(); // You may not need this if refetchQueries works as intended
      onClose();
    },
    refetchQueries: [
      { query: GET_ALL_MENU_ITEMS }, // This will refetch your menu items query
    ],
  });

const [updateMenuItem] = useMutation(UPDATE_MENU_ITEM, {
    onCompleted: () => {
      // refetch(); // Similarly, this may not be needed
      onClose();
    },
    refetchQueries: [
      { query: GET_ALL_MENU_ITEMS }, // Ensures the menu items list is up-to-date
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Optionally clear errors for a field when it's changed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pre-process formData to remove empty string values before submitting
    const filteredInput = Object.entries(formData).reduce(
      (acc, [key, value]) => {
        // Only add non-empty values to the filteredInput object
        if (value !== "") {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );

    // Make sure to parse the price as a float
    filteredInput.price = parseFloat(filteredInput.price);

    if (isEditMode) {
      await updateMenuItem({
        variables: { _id: item._id, input: filteredInput },
      });
    } else {
      await addMenuItem({
        variables: { input: filteredInput },
      });
    }
  };

  if (loadingCategories) return <p>Loading categories...</p>;

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
        {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}

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
        {errors.price && <div style={{ color: "red" }}>{errors.price}</div>}

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          {categoriesData &&
            categoriesData.categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>

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
        <button type="submit">{isEditMode ? "Update" : "Add"} Menu Item</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default MenuItemModal;
