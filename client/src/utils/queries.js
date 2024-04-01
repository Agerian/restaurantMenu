import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
    }
  }
`;


export const GET_ALL_MENU_ITEMS = gql`
  query GetAllMenuItems {
    getAllMenuItems {
      _id
      name
      description
      price
      category
    }
  }
`;

export const GET_ALL_MENU_ITEMS_BY_CATEGORY = gql`
query getAllMenuItemsByCategory($category: String!) {
    getAllMenuItemsByCategory(category: $category) {
        _id
        name
        description
        price
        category
    }
}
`;

export const GET_MENU_ITEM_BY_ID = gql`
query getMenuItemById($_id: ID!) {
    getMenuItemById(_id: $_id) {
        _id
        name
        description
        price
        category
    }
}
`;


export default {
    GET_ALL_MENU_ITEMS_BY_CATEGORY,
    GET_MENU_ITEM_BY_ID,
    GET_ALL_MENU_ITEMS,
    QUERY_PROFILES
  };