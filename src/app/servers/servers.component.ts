import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created.';
  serverName = 'InitialValue';
  username = '';
  serverCreated = false;
  servers = ['InitialValue1'];

  showParagraph = false;
  log = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'New Server created! Name is: ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  resetUsername() {
    this.serverName = '';
  }

  onToggleDetails() {
    this.showParagraph = !this.showParagraph;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
