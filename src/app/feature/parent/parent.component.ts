import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/Service/food.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private foodService: FoodService) {
    console.log(`parent service id = ${this.foodService.id}`);
   }

  ngOnInit(): void {
  }

}
