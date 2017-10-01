import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  display = false;
  logs = [];
  index = 0;
  constructor() { }

  ngOnInit() {
  }

  onDisplayClick() {
    this.display = !this.display;
    this.logs.push(++this.index);
  }
}