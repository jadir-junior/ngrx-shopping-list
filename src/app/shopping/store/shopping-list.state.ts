export interface ShoppingListItem {
  id: number;
  name: string;
  quantity: number;
  img: {
    src: string;
    alt: string;
  };
}

export interface ShoppingListState {
  entities: ShoppingListItem[];
  isLoading: boolean;
}
