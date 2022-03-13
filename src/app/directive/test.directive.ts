import { Directive, Host } from '@angular/core';
import { FoodService } from '../Service/food.service';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private foodService: FoodService) {
    console.log(`test directive id = ${this.foodService.id}`);
   }

}
