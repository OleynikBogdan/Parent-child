import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() childCounter: number | null = null;
  @Output() showChild: EventEmitter<boolean> = new EventEmitter(false);
  @Output() childCounterValue: EventEmitter<number> = new EventEmitter();
  constructor(private router:Router){}

  goToParent(): void{
    this.router.navigate(['parent']);
    this.showChild.emit(false);
  }

  childCounterIncrement(): void{
    if(this.childCounter !== null) {
      this.childCounter++;
      this.childCounterValue.emit(this.childCounter);
    }
  }
  childCounterDecrement(): void{
    if(this.childCounter !== null) {
      this.childCounter--;
      this.childCounterValue.emit(this.childCounter);
    }
  }
}
