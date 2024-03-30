//added in the gql from apollo-server-express to use the gql template literal
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type MenuItem {
    _id: ID!
    name: String!
    description: String
    price: Float!
    category: String!
}

input MenuItemInput {
    name: String!
    description: String
    price: Float!
    category: String!
}

type Query {
    getAllMenuItemsByCategory(category: String!): [MenuItem!]
    getMenuItemById(_id: ID!): MenuItem
}

type Mutation {
    addMenuItem(input: MenuItemInput!): MenuItem
    updateMenuItem(_id: ID!, input: MenuItemInput!): MenuItem
    deleteMenuItem(_id: ID!): String
}
`;

module.exports = typeDefs;
