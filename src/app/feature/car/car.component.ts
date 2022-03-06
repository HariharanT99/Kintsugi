import { Component } from '@angular/core';
import { EngineService } from 'src/app/Service/engine.service';
import { FuleService } from 'src/app/Service/fule.service';
import { TireService } from 'src/app/Service/tire.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  engineService: EngineService;
  tireService: TireService;
  constructor() { 
    this.engineService = new EngineService(new FuleService);
    this.tireService = new TireService();
  }

}
