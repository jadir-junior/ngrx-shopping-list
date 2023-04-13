import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  NoopValueAccessorDirective,
  injectNgControl,
} from '../common/inject-ng-control';

import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input',
  hostDirectives: [NoopValueAccessorDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mt-2 " [ngClass]="classesContainer">
      <label
        class="block mb-1"
        *ngIf="label"
        [for]="label"
        [ngClass]="classesLabel"
        >{{ label }}</label
      >
      <input
        class="border-gray-300 border rounded py-2 px-2 w-full outline-none"
        [formControl]="formControlName.control"
        [type]="type"
        [attr.aria-label]="ariaLabel"
        [attr.placeholder]="placeholder"
        [attr.name]="name"
        [id]="label"
        [ngClass]="classesInput"
      />
      <div
        *ngIf="
          formControlName.invalid &&
          (formControlName.dirty || formControlName.touched)
        "
        class="text-sm text-red-500 mt-1"
      >
        <div *ngIf="formControlName.errors?.['required']">
          {{ name || formControlName.name }} is required.
        </div>
      </div>
    </div>
  `,
})
export class InputComponent {
  formControlName: FormControlName = injectNgControl();

  @Input() type: 'text' | 'number' = 'text';
  @Input() ariaLabel?: string;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() name?: string;

  isValid(): boolean | null {
    return (
      this.formControlName.invalid &&
      (this.formControlName.dirty || this.formControlName.touched)
    );
  }

  get classesContainer() {
    return {
      'h-24': this.label,
      'h-16': !this.label,
    };
  }

  get classesInput() {
    return {
      'border-red-500': this.isValid(),
    };
  }

  get classesLabel() {
    return {
      'text-red-500': this.isValid(),
    };
  }
}
