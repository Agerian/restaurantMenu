import { gql } from '@apollo/client';

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

export default {
    ADD_MENU_ITEM,
    UPDATE_MENU_ITEM,
    DELETE_MENU_ITEM,
  };