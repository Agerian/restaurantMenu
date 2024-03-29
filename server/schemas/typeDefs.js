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

type Query {
    getMenuItemsByCategory(category: MenuItemCategory!): [MenuItem!]
    getMenuItemById(_id: ID!): MenuItem
}
`;

module.exports = typeDefs;
