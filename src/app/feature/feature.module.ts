import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { BunnyComponent } from './parent/bunny/bunny.component';
import { TestService } from '../Service/test.service';
import { FoodService } from '../Service/food.service';

@NgModule({
  declarations: [ParentComponent, BunnyComponent],
  imports: [CommonModule],
  exports: [ParentComponent],
  providers: [TestService, FoodService]
})
export class FeatureModule {}
