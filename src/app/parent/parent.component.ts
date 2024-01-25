import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  parentCounter: number = 0;
  showChild: boolean = false;
  constructor(private router:Router) {}

  goToChild(): void{
    this.router.navigate(['parent/child']);
    this.showChild = true;
  }

  increment(): void{
    this.parentCounter++; 
  }
  
  decrement(): void{
    this.parentCounter--;
  }

  handleShowChild(value: boolean): void{
    this.showChild = value;
  }

  handleChildCounter(value: number): void{
    this.parentCounter = value;
  }

  
}
