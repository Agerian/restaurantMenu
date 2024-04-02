import { gql } from '@apollo/client';

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
  mutation login($name: String!, $password: String!) {
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
        category
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
        category
    }
}
`;

export const DELETE_MENU_ITEM = gql`
mutation deleteMenuItem($_id: ID!) {
    deleteMenuItem(_id: $_id)
}
`;

export const REMOVE_PROFILE = gql`
  mutation removeProfile($profileId: ID!) {
    removeProfile(profileId: $profileId) {
      _id
      name
    }
  }
`;

export default {
    ADD_MENU_ITEM,
    UPDATE_MENU_ITEM,
    DELETE_MENU_ITEM,
    ADD_PROFILE,
    LOGIN_USER,
    REMOVE_PROFILE
  };