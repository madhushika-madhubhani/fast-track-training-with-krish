import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    FibonacciComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
