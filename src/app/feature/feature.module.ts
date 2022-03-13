import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { BunnyComponent } from './parent/bunny/bunny.component';
import { TestDirective } from '../directive/test.directive';

@NgModule({
  declarations: [ParentComponent, BunnyComponent, TestDirective],
  imports: [CommonModule],
  exports: [ParentComponent]
})
export class FeatureModule {}
