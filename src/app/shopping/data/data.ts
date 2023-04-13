import { ShoppingListItem } from '../store/shopping-list.state';

export const SHOPPING_LIST: ShoppingListItem[] = [
  {
    id: 1,
    name: 'Banana',
    quantity: 5,
    img: {
      src: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      alt: 'banana',
    },
  },
  {
    id: 2,
    name: 'Strawberry',
    quantity: 2,
    img: {
      src: 'https://images.unsplash.com/photo-1576561601677-ac33c580a70b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      alt: 'strawberry',
    },
  },
];
