import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    .lines {
      color: white
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created."
  serverName = '';
  serverCreated = false;
  servers = ['server 1', 'server 2']

  constructor() {
    setTimeout(()=> {
      return this.allowNewServer = true;
    },2000)

  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push('new server');
    this.serverCreationStatus = "Voila! New server has been created. Server name is " + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // =========== ASSIGNMENT 2 - PRACTICE DATA BINDING ===========
  username = '';

  onReset() {

    return this.username = '';
  }

    // =========== ASSIGNMENT 3 - PRACTICE DATA BINDING ===========
    myParagraph = 'Secret password = tuna'
    isShow = false;
    clickTimes = []
    count = 0;
    logTimeStamp = []

    onShow() {
      this.isShow = !this.isShow;
      this.clickTimes.push((this.clickTimes.length));
    }

// <!-- ======== USING TIMESTAMP ========== -->

    onShowTimeStamp() {
      this.logTimeStamp.push((new Date()));
    }

}
