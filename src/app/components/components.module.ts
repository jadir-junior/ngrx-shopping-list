import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { NgModule } from '@angular/core';

const modules = [InputModule, ButtonModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class ComponentsModule {}
