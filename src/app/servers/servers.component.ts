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
  serverName = '';
  isServerCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {

    setTimeout( () => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onClickAddServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    // this.serverCreationStatus = this.serverName + ' Server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
