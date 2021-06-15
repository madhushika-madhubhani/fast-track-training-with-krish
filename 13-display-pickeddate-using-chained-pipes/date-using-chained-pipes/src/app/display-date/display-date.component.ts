import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-date',
  templateUrl: './display-date.component.html',
  styleUrls: ['./display-date.component.css']
})
export class DisplayDateComponent implements OnInit {
  @Input() pickedDate!: Date;



  constructor() {

  }

  ngOnInit(): void {

  }
}
