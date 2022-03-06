import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/Service/food.service';

@Component({
  selector: 'app-bunny',
  templateUrl: './bunny.component.html',
  styleUrls: ['./bunny.component.scss'],
})
export class BunnyComponent implements OnInit {

  constructor(private foodService: FoodService) {
    console.log(`bunny service id = ${this.foodService.id}`);
  }

  ngOnInit(): void {}
}
