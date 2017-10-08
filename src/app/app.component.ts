import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenArr = [];
  oddArr = [];

  onCouterChange(counter: number) {
    if (counter % 2 === 0) {
      this.evenArr.push(counter);
    } else {
      this.oddArr.push(counter);
    }
  }
}
