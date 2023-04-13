import { Component } from '@angular/core';
import { Ingredient } from './shopping/models/ingredient.model';

@Component({
  selector: 'app-root',
  template: `
    <header class="flex justify-center py-8 font-bold text-xl text-gray-700">
      Shopping list
    </header>
    <app-add-shopping></app-add-shopping>
    <app-shopping-list [ingredients]="ingredients"></app-shopping-list>
  `,
})
export class AppComponent {
  ingredients: Ingredient[] = [
    {
      name: 'Banana',
      amount: 5,
      img: {
        src: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        alt: 'banana',
      },
    },
    {
      name: 'Strawberry',
      amount: 2,
      img: {
        src: 'https://images.unsplash.com/photo-1576561601677-ac33c580a70b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        alt: 'strawberry',
      },
    },
  ];
}
