import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShoppingModule } from './shopping/shopping.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping/store/shopping-list-reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShoppingModule,
    StoreModule.forRoot({
      shoppingList: shoppingListReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
