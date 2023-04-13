import { Component, Input, OnInit } from '@angular/core';

import { ShoppingListItem } from '../store/shopping-list.state';
import { Store } from '@ngrx/store';
import { loadShoppingList } from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  template: `<ul>
    <app-shopping-item
      *ngFor="let item of shoppingList"
      [shoppingItem]="item"
    ></app-shopping-item>
  </ul>`,
})
export class ShoppingListComponent implements OnInit {
  @Input() shoppingList?: ShoppingListItem[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadShoppingList());
  }
}
