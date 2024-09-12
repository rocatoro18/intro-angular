import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:`
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(2)">+2</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>
  `,
})
export class CounterComponent{
  public counter: number = 20;

  increaseBy(value:number): void{
    this.counter +=  value;
  }

  decreaseBy(value:number): void{
    this.counter -= value;
  }

  resetCounter(): void{
    this.counter = 0;
  }

}
