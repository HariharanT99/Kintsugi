import { Component } from '@angular/core';
import { FoodService } from './Service/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FoodService]
})
export class AppComponent {
  title = 'AngularDI';

  constructor(private foodService: FoodService) {
    console.log(`app service id = ${this.foodService.id}`);
  }
}
