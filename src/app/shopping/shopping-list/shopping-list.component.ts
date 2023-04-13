import { Component, Input } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  template: `<ul>
    <li
      *ngFor="let ingredient of ingredients"
      class="flex justify-between items-center mx-4 my-2 px-4 py-2"
    >
      <div class="flex">
        <div class="h-24 w-24">
          <img
            *ngIf="ingredient.img.src"
            [src]="ingredient.img.src"
            [alt]="ingredient.img.alt"
          />
          <div
            *ngIf="!ingredient.img.src"
            class="h-24 w-24 bg-gray-200 rounded-xl"
          ></div>
        </div>
        <div class="mt-4 ml-4">
          <span>{{ ingredient.name }}</span>
        </div>
      </div>
      <div
        class="w-16 h-16 flex justify-center items-center rounded-3xl border border-gray-400"
      >
        <span class="font-bold">{{ ingredient.amount }}</span>
      </div>
    </li>
  </ul>`,
})
export class ShoppingListComponent {
  @Input() ingredients?: Ingredient[];
}
