import { gql } from '@apollo/client';
//changed from id to username
export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const ADD_MENU_ITEM = gql`
mutation addMenuItem($input: MenuItemInput!) {
    addMenuItem(input: $input) {
        _id
        name
        description
        price
        category {
          _id
          name
        }
        vineyard
        region
        tastingNotes
    }
}
`;

export const UPDATE_MENU_ITEM = gql`
mutation updateMenuItem($_id: ID!, $input: MenuItemInput!) {
    updateMenuItem(_id: $_id, input: $input) {
        _id
        name
        description
        price
        category {
          _id
          name
        }
        vineyard
        region
        tastingNotes
    }
}
`;

export const DELETE_MENU_ITEM = gql`
mutation deleteMenuItem($_id: ID!) {
    deleteMenuItem(_id: $_id)
}
`;

export const REMOVE_PROFILE = gql`
mutation removeProfile($username: String!) {
  removeProfile(username: $username) {
    _id
    username
  }
}
`;

export const ADD_CATEGORY = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
      _id
      name
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($_id: ID!, $name: String!) {
    updateCategory(_id: $_id, name: $name) {
      _id
      name
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($_id: ID!) {
    deleteCategory(_id: $_id)
  }
`;

export default {
    ADD_MENU_ITEM,
    UPDATE_MENU_ITEM,
    DELETE_MENU_ITEM,
    ADD_PROFILE,
    LOGIN_USER,
    REMOVE_PROFILE,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
  };
