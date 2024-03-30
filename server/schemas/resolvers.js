//pulling in models from models folder
const { MenuItem } = require('../models');
//if We add in the admin role we need to add JWT and Auth erre should be added to a .../utils/auth.js file if we do
//will need to add more to the resolvers as we continue the project including mutations
const resolvers = {
    Query: {
        //get all menu items by enum or category
        getAllMenuItemsByCategory: async (_, { category }) => {
            try {
                const menuItems = await MenuItem.find({ category });
                return menuItems;
            }
            catch (err) {
                console.log(err);
            }
        },
        getMenuItemById: async (_, { _id }) => {
            try {
                const menuItem = await MenuItem.findById(_id);
                return menuItem;
            } catch (err) {
                console.log(err);
            }
        }
    },

    //add mutations here
    Mutation: {
        addMenuItem: async (parent, { input }) => {
            try {
                const menuItem = await MenuItem.create({ input });
                return menuItem;
            } catch (err) {
                console.log(err);
            }
        },
        updateMenuItem: async (parent, { _id, input }) => {
            try {
                const menuItem = await MenuItem.findByIdAndUpdate(_id, input, { new: true });
                return menuItem;
            } catch (err) {
                console.log(err);
            }
        },
        deleteMenuItem: async (parent, { _id }) => {
            try {
                const menuItem = await MenuItem.findByIdAndDelete(_id);
                return "Menu Item Deleted";
            } catch (err) {
                console.log(err);
            }
        }

    }
};



module.exports = resolvers;