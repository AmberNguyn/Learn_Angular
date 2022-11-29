import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated =new EventEmitter<{serverName: string, serverContent: string}>();

  ngOnInit(): void {
  }

  @ViewChild('serverNameContent') serverContentInput : ElementRef;

    onAddServer(nameInput: HTMLInputElement) {
      console.log(nameInput)
      this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
      this.blueprintCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      })
  }
}
