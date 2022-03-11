import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ {provide: "Id" , useValue: 'dummy'} ]
})
export class DummyModule { }
