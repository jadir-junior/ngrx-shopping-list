import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-add-shopping',
  template: `
    <form [formGroup]="form" (submit)="onSubmit(form)" class="mx-8">
      <input
        type="text"
        placeholder="Ingradient"
        formControlName="name"
        class="border-gray-300 border rounded py-2 px-2 w-full"
      />
      <input
        type="number"
        placeholder="amount"
        formControlName="amount"
        class="border-gray-300 border rounded py-2 px-2 w-full my-4"
      />
      <button
        type="submit"
        class="bg-orange-500 hover:bg-orange-700 text-xl text-white py-2 px-2 rounded-full w-full"
      >
        add
      </button>
    </form>
  `,
})
export class AddShoppingComponent {
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    amount: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit({}: FormGroup): void {}
}
