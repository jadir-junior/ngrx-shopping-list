import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [type]="type"
      class="text-xl py-3 px-2 rounded-full w-full"
      [ngClass]="classes"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() type: 'submit' | 'button' = 'button';
  @Input() variant: 'primary' | 'base' = 'base';

  get classes() {
    return {
      'hover:bg-orange-700 bg-orange-500 text-white':
        this.variant === 'primary',
    };
  }
}
