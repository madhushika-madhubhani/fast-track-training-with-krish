import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent implements OnInit {
  @Output() dateChanged: EventEmitter<any> =   new EventEmitter();
   dateValue: Date = new Date();
  constructor() {
  }
  ngOnInit(): void {
 
  }

  onSubmit(){
    this.dateChanged.emit(this.dateValue);
   
}


}
