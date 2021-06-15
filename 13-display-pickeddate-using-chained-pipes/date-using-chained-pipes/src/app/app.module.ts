import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { InputDateComponent } from './input-date/input-date.component';
import { DisplayDateComponent } from './display-date/display-date.component';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    InputDateComponent,
    DisplayDateComponent,
    
  ],
  imports: [
    BrowserModule, 
    DateTimePickerModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
