import { Component } from '@angular/core';
import { SHOPPING_LIST } from './shopping/data/data';
import { ShoppingListItem } from './shopping/store/shopping-list.state';

@Component({
  selector: 'app-root',
  template: `
    <header class="flex justify-center py-8 font-bold text-xl text-gray-700">
      Shopping list
    </header>
    <app-add-shopping></app-add-shopping>
    <app-shopping-list [shoppingList]="shoppingList"></app-shopping-list>
  `,
})
export class AppComponent {
  shoppingList: ShoppingListItem[] = SHOPPING_LIST;
}
