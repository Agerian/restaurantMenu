import { gql } from '@apollo/client';

export const GET_ALL_MENU_ITEMS_BY_CATEGORY = gql`
query getAllMenuItemsByCategory($category: MenuItemCategory!) {
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

export const MenuItemCategory = {
    BREAKFAST: 'BREAKFAST',
    LUNCH_AND_DINNER: 'LUNCH_AND_DINNER',
    BEVERAGES: 'BEVERAGES',
    BEER: 'BEER',
    WINE: 'WINE',
    SPIRITS: 'SPIRITS',
    COCKTAILS: 'COCKTAILS'
};

export default {
    GET_ALL_MENU_ITEMS_BY_CATEGORY,
    GET_MENU_ITEM_BY_ID,
  };