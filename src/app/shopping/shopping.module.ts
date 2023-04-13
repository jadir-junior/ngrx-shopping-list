import { AddShoppingComponent } from './add-shopping/add-shopping.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, AddShoppingComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AddShoppingComponent, ShoppingListComponent],
})
export class ShoppingModule {}
