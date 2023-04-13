import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingItemComponent } from './shopping-item.component';

@NgModule({
  declarations: [ShoppingItemComponent],
  imports: [CommonModule],
  exports: [ShoppingItemComponent],
})
export class ShoppingItemModule {}
