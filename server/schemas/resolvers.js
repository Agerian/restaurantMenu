//pulling in models from models folder
const { MenuItem, Profile, Category } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
//if We add in the admin role we need to add JWT and Auth erre should be added to a .../utils/auth.js file if we do
//will need to add more to the resolvers as we continue the project including mutations

const resolvers = {
    Query: {

        getAllMenuItems: async () => {
            try {
              const menuItems = await MenuItem.find({}).populate('category');
              return menuItems;
            } catch (err) {
              console.log(err);
              throw new Error('Failed to retrieve menu items.');
            }
          },

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
        },
        profiles: async () => {
            return Profile.find();
        },
        categories: async () => {
            return Category.find({});
        },
    },


    //add mutations here
    Mutation: {
        addMenuItem: async (parent, { input }) => {
            try {
                const menuItem = await MenuItem.create(input);
                // Refetch the menuItem with population
                const populatedMenuItem = await MenuItem.findById(menuItem._id).populate('category');
                return populatedMenuItem;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to add menu item.');
            }
        },
        updateMenuItem: async (parent, { _id, input }) => {
            try {
                const menuItem = await MenuItem.findByIdAndUpdate(_id, input, { new: true });
                return menuItem;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to update menu item.');
            }
        },
        deleteMenuItem: async (parent, { _id }) => {
            try {
                const menuItem = await MenuItem.findByIdAndDelete(_id);
                return "Menu Item Deleted";
            } catch (err) {
                console.log(err);
            }
        },
        //changed id to username
        addProfile: async (parent, { username, email, password }) => {
            const profile = await Profile.create({ username, email, password });
            const token = signToken(profile);
      
            return { token, profile };
          },
          login: async (parent, { username, password }) => {
            const profile = await Profile.findOne({ username });
      
            if (!profile) {
              throw AuthenticationError
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError
            }
      
            const token = signToken(profile);
            return { token, profile };
          },

          removeProfile: async (parent, { username }) => {
            return Profile.findOneAndDelete({ username });
        },
        
        addCategory: async (_, { name }) => {
            return Category.create({ name });
        },

       
        updateCategory: async (_, { _id, name }) => {
            return Category.findByIdAndUpdate(_id, { name }, { new: true });
        },

       
        deleteCategory: async (_, { _id }) => {
            await Category.findByIdAndDelete(_id);
            return "Category deleted successfully.";
        },
    }
};



module.exports = resolvers;