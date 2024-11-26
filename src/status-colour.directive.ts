import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appStatusColour]',
  standalone: true,
})
export class StatusColourDirective {
  @Input() appStatusColour!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    switch (this.appStatusColour) {
      case 'To Do':
        this.el.nativeElement.style.color = 'orange';
        break;
      case 'In Progress':
        this.el.nativeElement.style.color = 'blue';
        break;
      case 'Done':
        this.el.nativeElement.style.color = 'green';
        break;
    }
  }
}
