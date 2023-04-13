import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-add-shopping',
  template: `
    <form [formGroup]="form" (submit)="onSubmit(form)" class="mx-8">
      <div class="mb-2">
        <app-input
          name="Product Description"
          placeholder="Product description"
          formControlName="name"
        ></app-input>
        <app-input
          type="number"
          name="Quantity"
          placeholder="quantity"
          formControlName="quantity"
        ></app-input>
      </div>
      <app-button type="submit" variant="primary">add</app-button>
    </form>
  `,
})
export class AddShoppingComponent {
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit({ value }: FormGroup): void {
    console.log(value);
  }
}
