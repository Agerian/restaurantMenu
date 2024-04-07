const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Profile {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Category {
    _id: ID!
    name: String!
  }

  type MenuItem {
    _id: ID!
    name: String!
    description: String
    price: Float!
    category: Category!
    vineyard: String
    region: String
    tastingNotes: String
}

input MenuItemInput {
    name: String!
    description: String
    price: Float!
    category: ID!
    vineyard: String
    region: String
    tastingNotes: String
}

type Query {
    profiles: [Profile]!
    getAllMenuItems: [MenuItem!]
    getAllMenuItemsByCategory(category: String!): [MenuItem!]
    getMenuItemById(_id: ID!): MenuItem
    categories: [Category]!
}

type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    removeProfile(username: String!): Profile
    addMenuItem(input: MenuItemInput!): MenuItem
    updateMenuItem(_id: ID!, input: MenuItemInput!): MenuItem
    deleteMenuItem(_id: ID!): String
    addCategory(name: String!): Category
    updateCategory(_id: ID!, name: String!): Category
    deleteCategory(_id: ID!): String
}
`;

module.exports = typeDefs;
