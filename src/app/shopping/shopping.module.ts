import { AddShoppingComponent } from './add-shopping/add-shopping.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingItemModule } from './components/shopping-item/shopping-item.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, AddShoppingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    ShoppingItemModule,
  ],
  exports: [AddShoppingComponent, ShoppingListComponent],
})
export class ShoppingModule {}
