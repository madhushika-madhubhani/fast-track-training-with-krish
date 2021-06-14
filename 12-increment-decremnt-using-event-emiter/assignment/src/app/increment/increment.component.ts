import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {
  @Input() count: number = 0
  @Output() incremnetChanged: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  increment() {
    this.count++;
    this.incremnetChanged.emit(this.count)
  }
}
