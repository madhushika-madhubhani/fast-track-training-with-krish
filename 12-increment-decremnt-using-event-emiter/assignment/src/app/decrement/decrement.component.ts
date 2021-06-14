import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css']
})
export class DecrementComponent implements OnInit {
@Input() count:number=0;
@Output() decrementChanged : EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  decrement(){
 this.count--;
 this.decrementChanged.emit(this.count)
  }
}
