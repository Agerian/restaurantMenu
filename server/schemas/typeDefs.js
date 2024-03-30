//added in the gql from apollo-server-express to use the gql template literal
const { gql } = require('apollo-server-express');

const typeDefs = gql`
enum MenuItemCategory {
    BREAKFAST
    LUNCH_AND_DINNER
    BEVERAGES
    BEER
    WINE
    SPIRITS
    COCKTAILS
}

type MenuItem {
    _id: ID!
    name: String!
    description: String
    price: Float!
    category: MenuItemCategory!
}

input MenuItemInput {
    name: String!
    description: String
    price: Float!
    category: MenuItemCategory!
}

type Query {
    getAllMenuItemsByCategory(category: MenuItemCategory!): [MenuItem!]
    getMenuItemById(_id: ID!): MenuItem
}

type Mutation {
    addMenuItem(input: MenuItemInput!): MenuItem
    updateMenuItem(_id: ID!, input: MenuItemInput!): MenuItem
    deleteMenuItem(_id: ID!): String
}
`;

module.exports = typeDefs;
