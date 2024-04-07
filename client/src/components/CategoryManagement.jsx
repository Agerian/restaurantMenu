import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CATEGORIES } from '../utils/queries';
import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../utils/mutations';

const CategoryManagement = () => {
    const { loading, error, data, refetch } = useQuery(GET_CATEGORIES);
    const [addCategory] = useMutation(ADD_CATEGORY);
    const [deleteCategory] = useMutation(DELETE_CATEGORY);
    const [updateCategory] = useMutation(UPDATE_CATEGORY);

    const [newCategoryName, setNewCategoryName] = useState('');
    const [editCategoryId, setEditCategoryId] = useState(null);
    const [editCategoryName, setEditCategoryName] = useState('');

    const handleAddCategory = async () => {
        await addCategory({
            variables: { name: newCategoryName },
        });
        refetch();
        setNewCategoryName('');
    };

    const handleDeleteCategory = async (categoryId) => {
        await deleteCategory({
            variables: { _id: categoryId },
        });
        refetch();
    };

    const handleEditCategory = async (categoryId) => {
        await updateCategory({
            variables: { _id: categoryId, name: editCategoryName },
        });
        setEditCategoryId(null);
        setEditCategoryName('');
        refetch();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h2>Manage Categories</h2>
            <div>
                <input
                    type="text"
                    placeholder="Add new category"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                />
                <button onClick={handleAddCategory}>Add Category</button>
            </div>
            {data.categories.map((category) => (
                <div key={category._id}>
                    {editCategoryId === category._id ? (
                        <>
                            <input
                                type="text"
                                value={editCategoryName}
                                onChange={(e) => setEditCategoryName(e.target.value)}
                            />
                            <button onClick={() => handleEditCategory(category._id)}>Save</button>
                            <button onClick={() => setEditCategoryId(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            {category.name}
                            <button onClick={() => {
                                setEditCategoryId(category._id);
                                setEditCategoryName(category.name);
                            }}>Edit</button>
                            <button onClick={() => handleDeleteCategory(category._id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CategoryManagement;
