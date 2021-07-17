import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <button (click)="accumulator(-base)"> {{base}}</button>
<span>{{counter}}</span>
<button (click)="accumulator(base)"> {{base}}</button>
<span>The base is 5</span>

  `
})
export class CounterComponent {
  title = 'bases';
  counter: number = 1;
  base: number = 5;


  accumulator = (value: number) => {
    this.counter += value;
  }

}
