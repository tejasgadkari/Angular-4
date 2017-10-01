import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  /*selector: '.app-servers',*/
  templateUrl : './servers.component.html',
  // template: '<app-server> </app-server> <app-server> </app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  userName = '';
  constructor() {

    setTimeout( () => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onClickAddServer() {
    this.serverCreationStatus = this.serverName + ' Server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onClickAddUserName() {
    this.userName = '';
  }
}
