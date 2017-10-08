import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() ctrEvent = new EventEmitter<number>();
  gameCounter = 0;
  intervalFunction;


  constructor() { }

  ngOnInit() {
  }

  startCounter() {

    this.intervalFunction = setInterval(() => {
      this.ctrEvent.emit(this.gameCounter + 1);
      this.gameCounter++;
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.intervalFunction);
  }
}
