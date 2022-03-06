import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { BunnyComponent } from './parent/bunny/bunny.component';

@NgModule({
  declarations: [ParentComponent, BunnyComponent],
  imports: [CommonModule],
  exports: [ParentComponent],
})
export class FeatureModule {}
