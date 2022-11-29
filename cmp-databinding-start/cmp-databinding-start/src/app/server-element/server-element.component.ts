import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None, //emulated, native
})
export class ServerElementComponent implements OnInit, AfterViewInit {
  @Input('svrElement') element: { type: string; name: string; content: string };

  @ViewChild('heading', {static:true}) header: ElementRef;
  @ContentChild('contentParagraph', {static:true}) paragraph : ElementRef;
  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('text is: ' + this.header.nativeElement.textContent);
    console.log("text of paragraph is: " + this.paragraph.nativeElement.textContent);

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('text is: ' + this.header.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
    console.log("text of paragraph is: " + this.paragraph.nativeElement.textContent);
  }
}
function ViewContent(arg0: string) {
  throw new Error('Function not implemented.');
}

