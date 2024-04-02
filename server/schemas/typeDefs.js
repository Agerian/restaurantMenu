//added in the gql from apollo-server-express to use the gql template literal
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


  type MenuItem {
    _id: ID!
    name: String!
    description: String
    price: Float!
    category: String!
    vineyard: String
    region: String
    tastingNotes: String
}

input MenuItemInput {
    name: String!
    description: String
    price: Float!
    category: String!
    vineyard: String
    region: String
    tastingNotes: String
}

type Query {
    profiles: [Profile]!
    getAllMenuItems: [MenuItem!]
    getAllMenuItemsByCategory(category: String!): [MenuItem!]
    getMenuItemById(_id: ID!): MenuItem
}

type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    removeProfile(profileId: ID!): Profile
    addMenuItem(input: MenuItemInput!): MenuItem
    updateMenuItem(_id: ID!, input: MenuItemInput!): MenuItem
    deleteMenuItem(_id: ID!): String
}
`;

module.exports = typeDefs;
