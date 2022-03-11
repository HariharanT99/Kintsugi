import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDI';

  constructor(@Inject("Id") private id: StringConstructor) {
    console.log('App-feature: ',this.id);
  }
}
