import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShoppingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
