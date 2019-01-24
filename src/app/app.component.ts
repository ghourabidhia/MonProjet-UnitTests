import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MonProjet-UnitTests';


  additionner(a: number, b: number): number {
    if (a > 0) {
      return a + b;
    } else {
      return a + b;
    }
  }
}
