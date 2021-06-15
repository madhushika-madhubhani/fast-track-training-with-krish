import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date-using-chained-pipes';
  pickedDate!: Date;

  dateChangedHandler($event:Date){
   this.pickedDate=$event

  }
}
