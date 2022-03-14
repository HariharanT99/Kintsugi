import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { BunnyComponent } from './parent/bunny/bunny.component';
import { TestService } from '../Service/test.service';
import { FoodService } from '../Service/food.service';
import { Test1Service } from '../Service/test1.service';
import { Test2Service } from '../Service/test2.service';

@NgModule({
  declarations: [ParentComponent, BunnyComponent],
  imports: [CommonModule],
  exports: [ParentComponent],
  providers: [
    FoodService,
    TestService,
    Test1Service,
    Test2Service
  ]
})
export class FeatureModule {}
