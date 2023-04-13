import { Component, Input } from '@angular/core';

import { ShoppingListItem } from '../../store/shopping-list.state';

@Component({
  selector: 'app-shopping-item',
  template: `
    <li class="flex justify-between items-center mx-4 my-2 px-4 py-2">
      <div class="flex">
        <div class="h-24 w-24">
          <img
            *ngIf="shoppingItem.img.src"
            [src]="shoppingItem.img.src"
            [alt]="shoppingItem.img.alt"
          />
          <div
            *ngIf="!shoppingItem.img.src"
            class="h-24 w-24 bg-gray-200 rounded-xl"
          ></div>
        </div>
        <div class="mt-4 ml-4">
          <span>{{ shoppingItem.name }}</span>
        </div>
      </div>
      <div
        class="w-16 h-16 flex justify-center items-center rounded-3xl border border-gray-300"
      >
        <span class="font-bold">{{ shoppingItem.quantity }}</span>
      </div>
    </li>
  `,
  styles: [],
})
export class ShoppingItemComponent {
  @Input() shoppingItem!: ShoppingListItem;
}
