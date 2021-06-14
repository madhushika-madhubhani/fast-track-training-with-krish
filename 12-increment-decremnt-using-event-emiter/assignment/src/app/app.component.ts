import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  counter:number= 0;
  countDecrementHander($event: number) {
    this.counter = $event;
  }
  countIncrementHandler($event: number) {
    this.counter = $event;
  }

}
