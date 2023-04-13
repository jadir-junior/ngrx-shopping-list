import { createReducer, on } from '@ngrx/store';
import {
  loadShoppingList,
  loadShoppingListError,
  loadShoppingListSuccess,
} from './shopping-list.actions';

import { ShoppingListState } from './shopping-list.state';

export const initalState: ShoppingListState = {
  entities: [],
  isLoading: false,
};

export const shoppingListReducer = createReducer(
  initalState,
  on(loadShoppingList, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loadShoppingListSuccess, (state, { entities }) => ({
    ...state,
    entities,
    isLoading: false,
  })),
  on(loadShoppingListError, (state) => ({
    ...state,
    isLoading: false,
  }))
);
